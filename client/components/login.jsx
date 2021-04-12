import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import { loginUser } from '../actions/auth'

function Login(props) {
	const { auth } = props

	const [formData, setFormData] = useState({
		username: '',
		password: '',
	})

	const handleChange = (e) => {
		setFormData((currentFormData) => {
			return {
				...currentFormData,
				[e.target.name]: e.target.value,
			}
		})
	}

	// const history = useHistory()

	// const routeChange = () => {
	// 	let path = `/listofwords`
	// 	history.push(path)
	// }


	const handleSubmit = (e) => {
		e.preventDefault()
		let { username, password } = formData
		const confirmSuccess = () => {
			props.history.push('/')
		}
		props.dispatch(loginUser({ username, password }, confirmSuccess))
	}

	return (
		<>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
			<hr/>
				{auth.errorMessage && (
					<span className="error">{auth.errorMessage}</span>
				)}
				<label>Username
					<input
						required
						className="login"
						placeholder="Username"
						type="text"
						name="username"
						autoComplete="username"
						value={formData.username}
						onChange={handleChange}
					/>
				</label>
				<label>
					<input
						required
						className="login"
						placeholder="Password"
						type="password"
						name="password"
						autoComplete="current-password"
						value={formData.password}
						onChange={handleChange}
					/>
				</label>
				<button type='submit'>Done</button>
			</form>
			<Link to='/' replace >back</Link>
		</>
	)
}

const mapStateToProps = ({ auth }) => {
	return {
		auth,
	}
}

export default connect(mapStateToProps)(Login)