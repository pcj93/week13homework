import React, { useState } from "react";


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return(
    <div className="auth-form-container">
        <h3>Login</h3>
       <form className='Login-Form'onSubmit={handleSubmit}>
        <label htmlFor='email'>email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder="noobmaster or 123@gmail.com" id='email' name="email"/>
        <label htmlFor='password'>password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)}type='password' placeholder="**********" id='password' name="password"/>
        <button type="sumbit">Log In</button>
       </form>
       <button className="Link-Btn" onClick={() => props.onFormSwitch('Login')}>Don't Have An Account? Register Here!</button>
    </div>
    )
}