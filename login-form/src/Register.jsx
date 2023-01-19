import React, {useState} from "react";


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState(' ');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }


    return(
    <div className="auth-form-container">
        <h3>Register</h3>
        <form className="Register-Form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input value={name} name='name' id="name" placeholder="Full Name"/>
         <label htmlFor='email'>Email</label>
         <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder="headmaster123 or 123@gmail.com" id='email' name="email"/>
         <label htmlFor='password'>Password</label>
         <input value={pass} onChange={(e) => setPass(e.target.value)}type='password' placeholder="**********" id='password' name="password"/>
         <button type="sumbit">Log In</button>
        </form>
        <button onClick={() => props.onFormSwitch('Register')}>Already Have An Account? Login here!</button>
    </div>
    )
}