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
			<h1 className='title'>Login</h1>
			<form onSubmit={handleSubmit}>
				{auth.errorMessage && (
					<span className="error">{auth.errorMessage}</span>
				)}
				<div className='login-boxes'>
					<label>
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
				</div>
                <div className='button-div'>
                    <button className='button' type='submit'>Login</button>
                </div>
			</form>
            <div className='button-div'>
			    <Link to='/' replace >back</Link>
            </div>
		</>
	)
}

const mapStateToProps = ({ auth }) => {
	return {
		auth,
	}
}

export default connect(mapStateToProps)(Login)