import React from 'react'
import HomeIcon from '../images/home-icon.png'
import Posts from '../post/Posts'

const Home = () => (
	<div>
		<div className="jumbotron" class="text-center">
			<img src={`${HomeIcon}`} class="img-fluid mt-5" alt="Responsive" />
			<h1 class="display-4">Compass v1.0</h1>
	  		<p class="lead">Welcome to our private social media network.</p>
		</div>

		<div className="container">
			<Posts />
		</div>
	</div>
)

export default Home;