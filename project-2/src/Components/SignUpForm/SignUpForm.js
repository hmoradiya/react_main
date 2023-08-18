import React, { useState, useContext } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocs } from '../../Utils/Firebase/Firebase'
import FormInput from '../FormInput/FormInput';
import './SignUpForm.scss';
import Button from '../Button/Button';
import { UserContext } from '../../Contexts/Contexts';


const formDefField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}  

function SignUpForm() { 

    const [formField, setFormField] = useState(formDefField);

    const { setCurrentUser } = useContext(UserContext)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormField({ ...formField, [name]: value })
    }

    const resetFormField = () => {
        setFormField(formDefField)
    }
    
    const handleSubmit =async (e) => {
        e.preventDefault();
        if (formField.password != formField.confirmPassword ){
            alert("Password and Confirm Password not match");
            return;
        }
        try {
            const displayName = formField.displayName;
            const {user} = await createAuthUserWithEmailAndPassword(formField.email, formField.password)
            setCurrentUser(user)
            await createUserDocs(user, { displayName })
            resetFormField();
        }
        catch (error) {
            if(error.code = 'auth/email-already-in-use')
            {
                alert('Use diffrent email, it is alredy used!')
            }
            else {
                console.log(error)
            }
        }
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign Up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name"  handleChange={handleChange} name='displayName' type='text' value={formField.displayName} required={true} />
                <FormInput label="Email" type='email' name='email' handleChange={handleChange} value={formField.email} required={true} />
                <FormInput label="Password" type='password' name='password' handleChange={handleChange} value={formField.password} required={true} />
                <FormInput label="Confirm Password" type='password' name='confirmPassword' handleChange={handleChange} value={formField.confirmPassword} required={true} />
                <Button type='submit' label='Sign Up' />
            </form>
        </div>
    )
}

export default SignUpForm