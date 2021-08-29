import React, { useState } from 'react'
import './SIgnUp.css'
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const {closeSignIn} = useGlobalContext()
    const [person, setPerson] = useState({firstName:'', lastName:'', email:'', password:'', confirmPassword:''});
    const [people, setPeople] = useState([]);
    const [success, setSuccess] = useState(null)
    const [wrong, setWrong] = useState(null)

   const handleChange = (e) =>{
       const name = e.target.name;
       const value = e.target.value;
       setPerson({...person,[name]:value})
   }
  

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(person)
        setSuccess(false)
        setWrong(false)
        if(person.firstName && person.lastName && person.email && person.password === person.confirmPassword){
            const newPerson = {...person, id: new Date().getTime().toString()}
            setPeople([...people, newPerson])
            setPerson({firstName:'', lastName:'', email:'', password:'', confirmPassword:''})
            setSuccess('SignUp Success !!')
        }
        if(person.password !== person.confirmPassword){
            setWrong('Password Wrong !!')
        }

    }

    return (
        <section className="signup-section" onMouseOver={closeSignIn}>
                <div id="container">
                    <div className='success'>
                        <h3>{success}</h3>
                        <p>{wrong}</p>
                    </div>
                    <form className="sign-up-center">
                        <label htmlFor="">Your first name</label>
                        <input type="text"
                        placeholder="Enter first name here"
                        required
                        id='firstName'
                        name='firstName'
                        value={person.firstName}
                        onChange={handleChange}
                        />
                        <label htmlFor="">Your last name</label>
                        <input type="text"
                        placeholder="Enter last name here"
                        required
                        id='lastName'
                        name='lastName'
                        value={person.lastName}
                        onChange={handleChange}
                        />
                        <label htmlFor="">E-mail/Phone number</label>
                        <input type="text"
                        placeholder="Enter Email address here"
                        id='email'
                        name='email'
                        value={person.email}
                        onChange={handleChange}
                        />
                        <label htmlFor="">password</label>
                        <input type="password"
                        placeholder="password here"
                        id='password'
                        name='password'
                        value={person.password}
                        onChange={handleChange}
                        />
                        <label htmlFor="">Confirm Password</label>
                        <input type="password"
                        placeholder="confirm password here"
                        id='confirmPassword'
                        name='confirmPassword'
                        value={person.confirmPassword}
                        onChange={handleChange}
                        />
                        <button type='submit'
                        onClick={handleSubmit}>Sign Up</button>
                        <Link to='signin'>Sign In</Link>
                    </form>
                </div>
        </section>
    )
}

export default SignUp
