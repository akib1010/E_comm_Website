import {useState} from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formFields

    const resetFormFields= () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword ){
            alert("Password does not match")
            return
        }

        try {
            const {user} = createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, {displayName})
            resetFormFields()

        }catch (error){
            console.log('user creation error',error)
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target

        setFormFields({...formFields, [name]: value})
    }

    return (
        <div>
            <h1>Sign up with email</h1>
            <form onSubmit={() => {}}>
                <label>Display Name</label>
                <input type='text' required onChange={handleChange} name='displayName' value={displayName}/>
                <label>Email</label>
                <input type='email' required onChange={handleChange} name='email' value={email}/>
                <label>Password</label>
                <input type="password" required onChange={handleChange} name='password' value={password}/>
                <label>Confirm Password</label>
                <input type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;