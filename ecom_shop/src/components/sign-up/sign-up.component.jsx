import './sign-up.styles.scss'
import React from 'react'

import FormInput from '../form-input/from-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, createUserProfileDocument, signUpWithGoogle } from '../../firebase/firebase.utils'

class SignUp extends React.Component{

    constructor(){
        super()
        this.state={
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        // Defualt event not to happend
        event.preventDefault()
 
        const {displayName, email, password, confirmPassword} = this.state

        if(password !== confirmPassword){
            alert(`Password's don't match`)
            return 
        }

        try{
            // Sending the detail to the Authentication Lobrary
            // waits for firebase to fill the information before sending it back to the code
            const {user} = await auth.createUserWithEmailAndPassword(email,password)


            

            console.log(user)

            // firestore
            await createUserProfileDocument(user, displayName)
        }catch(error){
            console.log(error)
            
        }
    }

    handleChange = event => {
        const {name, value} = event.target 
    
        this.setState({[name]: value})
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state
        
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Signup with ypur email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        label='DisplayName'
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        label='Email'
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        label='Password'
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        label='Confirm Password'
                        onChange={this.handleChange}
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                    <CustomButton onClick={signUpWithGoogle}>SIGN UP WITH GOOGLE</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp