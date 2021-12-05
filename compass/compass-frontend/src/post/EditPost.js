import React, { Component } from 'react';
import {singlePost} from './apiPost'
import {isAuthenticated} from '../auth'
import {update} from './apiPost'
import {Redirect} from 'react-router-dom'
import DefaultPost from '../images/void-post-image-avatar.png'

class EditPost extends Component {
	constructor() {
		super()
		this.state = {
			id: '',
			title: '',
			body: '',
			redirectToProfile: false,
			error: '',
			fileSize: 0,
			loading: false
		}
	}

	init = (postId) => {
		singlePost(postId)
		.then(data => {
			if (data.error) {
				this.setState({redirectToProfile: true});
			}
			else {
				this.setState({
					id: data._id, 
					title: data.title, 
					body: data.body,
					error: ""
				});
			}
		});
	}

	componentDidMount() {
		this.postData = new FormData()
		const postId = this.props.match.params.postId;
		this.init(postId);
	}

	isValid = () => {
		const {title, body, fileSize} = this.state

		if (fileSize > 1000000) {
			this.setState({error: "File size should be less than 1mb", loading: false})
			return false;
		}

		if (title.length === 0) {
			this.setState({error: "Title is required", loading: false})
			return false;
		}

		if (body.length === 0) {
			this.setState({error: "Body is required", loading: false})
			return false;
		}

	
		return true;	
	} 

	handleChange = (name) => (event) => {
		this.setState({error: ""})
		const value = name === 'photo' ? event.target.files[0] : event.target.value

		const fileSize =  name === 'photo' ? event.target.files[0].size : 0;
		this.postData.set(name, value)
		this.setState({ [name]: value, fileSize })
	};

	clickSubmit = event => {

		event.preventDefault();
		this.setState({loading: true})

		if (this.isValid()) {
			const postId = this.state.id;
			const token = isAuthenticated().token;

			update(postId, token, this.postData)
			.then((data) => {
				if (data.error) this.setState({error: data.error});
				else {
					this.setState({
						loading: false, 
						title: "", 
						body: "",
						photo: "",
						redirectToProfile: true
					});
				}
			});		
		}

	};

	editPostForm = (title, body) => (

		<form>
			<div className="from-group">
				<label className="text-muted">Post Photo</label>
				<input 
					onChange={this.handleChange("photo")} 
					type="file" 
					accept="image/*"
					className="form-control" 
			/>
			</div> 

			<div className="from-group">
				<label className="text-muted">Title</label>
				<input 
					onChange={this.handleChange("title")} 
					type="text" 
					className="form-control" 
					value={title}
			/>
			</div> 

			<div className="from-group">
				<label className="text-muted">Body</label>
				<textarea 
					onChange={this.handleChange("body")} 
					type="text" 
					className="form-control" 
					value={body}
			/>
			</div> 

			<button onClick={this.clickSubmit} className="btn btn-raised btn-primary">Edit Post</button>  
		</form>
	);


	render() {
		const {id, title, body, redirectToProfile, error, loading} = this.state
		const photoUrl = id ? `${process.env.REACT_APP_API_URL}/post/photo/${id}?${new Date().getTime()}` : DefaultPost;


		if (redirectToProfile) {
			return <Redirect to={`/user/${isAuthenticated().user._id}`} />
		}

		return (
			<div className="container">
				<h2 className="mt-5 mb-5">{title}</h2>

				<div className="alert alert-danger" 
					style={{display: error ? "" : "none"}}>
						{error}
				</div>

				<h2 className="mt-5 mb-5">Edit Post</h2>	

				{ loading ? (
					<div className="jumbotron text-center">
						<h2>Loading...</h2>
					</div>
				) : (
						""
				)}

				<img
					style={{height: "200px", width: "auto"}} 
					className="img-thumbnail"
					src={photoUrl} 
					onError={i => {i.target.src = `${DefaultPost}`}} 
					alt={title} 
				/>

				{this.editPostForm(title, body)}
			</div>
		);
	}
}

export default EditPost;