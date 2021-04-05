import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'

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
            props.history.push('/home')
        }
        props.dispatch(loginUser({ username, password }, confirmSuccess))
    }

    return(
        <>
        </>
    )
}

const mapStateToProps = ({ auth }) => {
    return {
        auth,
    }
}

export default connect(mapStateToProps)(Login)