import './sign-in.styles.scss'
import React from 'react'

import FormInput from '../form-input/from-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
        }
    }

    // handleEmail = event => {
    //     this.setState({email: event.target.value})
    // }

    // handlePassword = event => {
    //     this.setState({password: event.target.value})
    // }

    handleChange = event => {
        const {name, value} = event.target

        this.setState({[name]:value})
    }

    handleSubmit = event => {
        // Prevent any Default event
        event.preventDefault()

        this.setState({email:'',password:''})
    }

    render(){
        return (
            <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                {/* <input onChange={this.handleChange} name='email' type='email' value={this.state.email} required/>
                <label>Email</label>

                <input onChange={this.handleChange} name='password' type='password' value={this.state.password} required/>
                <label>Password</label> */}

                <FormInput 
                    handleChange={this.handleChange} 
                    name='email' 
                    type='email' 
                    label='Email' 
                    value={this.state.email} 
                    required
                />

                <FormInput 
                    handleChange={this.handleChange} 
                    name='password' 
                    type='password' 
                    label='Password' 
                    value={this.state.password} 
                    required
                />

                {/* <input type='submit' value='Submit Form'/> */}
                <CustomButton type='submit' value='Submit Form'>SIGN-IN</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn='true'>
                    SIGN IN WITH GOOGLE
                </CustomButton>
            </form>
        </div>

        )
        

    }
}

export default SignIn



// Assigment
// small web
// Check in the Assigment for description
