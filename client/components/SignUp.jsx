import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { loginError, registerUserRequest } from '../actions/auth'

function SignUp(props) {
	const { auth } = props

	const [formData, setFormData] = useState({
		username: '',
		first_name: '',
		last_name: '',
		password: '',
		confirm_password: ''
	})

	useEffect(() => {
		props.dispatch(loginError(''))
	}, [])

	const handleChange = (e) => {
		setFormData((currentFormData) => {
			return {
				...currentFormData,
				[e.target.name]: e.target.value,

			}
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		e.target.reset()
		let { username, password, confirm_password, first_name, last_name } = formData
		if (confirm_password != password) return props.dispatch(loginError("Passwords don't match"))
		const confirmSuccess = () => { props.history.push('/home') }
		props.dispatch(registerUserRequest({ username, password, first_name, last_name, time: new Date() }, confirmSuccess))
	}
	return (
		<>
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit}>
				{auth.errorMessage && <span className="error">{auth.errorMessage}</span>}
				<label className="sign-up">Username
          <input required
						className="sign-up"
						placeholder="Username"
						type="text"
						name="username"
						autoComplete="username"
						onChange={handleChange}
						value={formData.username} />
				</label>

				<label className="sign-up">First Name
            <input required className="sign-up" placeholder="First Name" type="text" name="first_name" onChange={handleChange} value={formData.first_name} />
				</label>

				<label className="sign-up">Last Name
            <input required className="sign-up" placeholder="Last Name" type="text" name="last_name" onChange={handleChange} value={formData.last_name} />
				</label>

				<label className="sign-up">Password
            <input required className="sign-up" placeholder="Password" type="password" name="password" autoComplete="new-password" onChange={handleChange} value={formData.password} />
				</label>

				<label className="sign-up">Confirm Password
            <input required className="sign-up" placeholder="Confirm Password" type="password" name="confirm_password" autoComplete="new-password" onChange={handleChange} value={formData.confirm_password} />
				</label>
				<button type='submit'>Done</button>
			</form>
		</>
	)
}

const mapStateToProps = ({ auth }) => {
	return {
		auth
	}
}

export default connect(mapStateToProps)(SignUp)