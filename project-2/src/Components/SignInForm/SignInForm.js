import React, { useState, useEffect, useContext } from 'react';
import { getRedirectResult, signInWithEmailAndPassword } from "firebase/auth";
import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocs, SignInAuthWithEmailAndPassword } from '../../Utils/Firebase/Firebase'
import FormInput from '../FormInput/FormInput';
import './SignInForm.scss';
import Button from '../Button/Button';

const formDefField = {
    email: '',
    password: ''
}

function SignInForm() {


    const redirectData = async () => {
        const results = await getRedirectResult(auth);
        if (results) {
            const userRef = createUserDocs(results.user)
        }
    }

    useEffect(() => {
        redirectData();
    }, [])



    const [formField, setFormField] = useState(formDefField);

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormField({ ...formField, [name]: value })
    }

    const resetFormField = () => {
        setFormField(formDefField)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { user } = await SignInAuthWithEmailAndPassword(formField.email, formField.password)
            resetFormField();
        }
        catch(error)
        {
            console.log(error)
            switch (error.code)
            {
                case 'auth/user-not-found':
                    alert('User not found, Ragister user with Sign Up')
                    break;
                case 'auth/wrong-password':
                    alert('Password is Incorrect, Please try again')
                    break;
                default:
                    console.log(error);
            } 
        }
    }
   
    const loginGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        const userRef = await createUserDocs(user)
    }

    const loginGoogleRedirect = async () => {
        const { user } = await signInWithGoogleRedirect();
        const userRef = await createUserDocs(user)
    }

    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type='email' name='email' handleChange={handleChange} value={formField.email} required={true} />
                <FormInput label="Password" type='password' name='password' handleChange={handleChange} value={formField.password} required={true} />

                <div className='d-flex column-gap-2'>
                    <Button type="submit" label='Sign In' />
                    <Button handleClick={loginGoogle} label='Sign In With Google' googleBtn={true} />
                </div>
            </form>
        </div>
    )
}

export default SignInForm