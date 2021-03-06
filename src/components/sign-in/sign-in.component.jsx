import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {SignInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email : '',
            password : ''
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({email : '',password : ''});
    }
    handleChange = event => {
        const {name,value} = event.target;
        this.setState({[name] : value});
    }
    render(){
        return (
            <div className = 'sign-in'>
                <h2>I already have an account</h2>
                <span>Sign In with your email and password</span>
                <form onSubmit = {this.handleSubmit}>
                    <FormInput label = "email" handleChange = {this.handleChange} type="email" name="email" value = {this.state.email} required />
                    <FormInput label = "password" handleChange = {this.handleChange} type="password" name="password" value = {this.state.password} required />
                    <div className="buttons">
                        <CustomButton type="submit" name="submit"  >Sign In</CustomButton>
                        <CustomButton onClick = {SignInWithGoogle} isGoogleSignIn >Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn;