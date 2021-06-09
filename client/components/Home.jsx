import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function Home( props, auth ) {

	const images = [
		{ url: '/images/book-closeup-1.jpg', description: 'book closeup' },
		{ url: '/images/man-with-book-1.jpg', description: 'man reading book' },
		{ url: '/images/person-reading-1.jpg', description: 'person reading' }
	]

	const [currentImage, setCurrentImage] = useState(0)

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (currentImage == adverts.length - 1) {
				setCurrentImage(0)
			} else {
				setCurrentImage(currentImage + 1);
			}
		}, 10000);

		return () => {
			clearTimeout(timeout);
		};
	}, [currentImage]);

	return (
		<>
			<h1 className='title'>Welcome to My Dictionary! </h1>
			<>
				<div className='main-images' className={`image-banners image-banners--${props.side}`}>
					{images.map((image, i) => (
						<img
							key={i}
							src={image.url}
							alt={image.description}
							className={i === currentImage ? 'current' : ''}
						/>
					))}
				</div>
			</>
			{auth.isAuthenticated &&
				<>

				</>
			}
			{!auth.isAuthenticated &&
				<>

				</>

			}
		</>
	)
}

function mapStateToProps(globalState) {
	return {
		words: globalState.words,
		auth: globalState.auth
	}
}

export default connect(mapStateToProps)(Home)
