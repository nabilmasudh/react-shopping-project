import React, { useState } from 'react'
import './SignIn.css'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
const SignIn = () => {
    const {isSignInOpen} = useGlobalContext()
    const [signPerson, setSignPerson] = useState({email:'', password:''});
    const [signPeople, setSignPeople] = useState([])

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setSignPerson({...signPerson,[name]:value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(signPerson.email && signPerson.passWord){
            const newPerson = {...signPerson, id: new Date().getTime().toString()}
            setSignPeople([...signPeople, newPerson])
            setSignPerson({email:'',passWord:''})
        }
    }
    return (
        <div id="container">
            <div className={`${isSignInOpen ? 'signin-menu show-signin-menu' : 'signin-menu'}`}>
                <form className="signin-menu-inner">
                    <h4>Sign in</h4>
                    <label htmlFor=""> E-mail</label>
                    <input type="email" 
                    placeholder="Enter your email"
                    id="email"
                    name="email"
                    value={signPerson.email}
                    onChange={handleChange}
                    />
                    <label htmlFor="">password</label>
                    <input type="password"
                    placeholder="password here"
                    id='password'
                    name='password'
                    value={signPerson.password}
                    onChange={handleChange}
                    />
                    <button type="submit" 
                    onClick={handleSubmit}
                    >LOGIN</button>
                    <Link to='/signup'>Sign Up</Link>
                    <Link to='/signup'>Forgot Password</Link>
                </form>
            </div>
        </div>
    )
}

export default SignIn;