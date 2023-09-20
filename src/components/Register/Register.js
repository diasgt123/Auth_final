import React from 'react'
import {useRef, useState, useEffect } from "react";
import axios from "../../api/Axios"
import { Link } from "react-router-dom";
const REGISTER_URL = '/register';

const Register = () => {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    //const [matchPwd, setMatchPwd] = useState('');

    const userRef = useRef();
    const errRef = useRef();

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user,email, pwd])

   const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            //need value attrib on inputs for this
            setUser('');
            setEmail('');
            setPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }
    

  return (
    <>
    {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="#">Sign In</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">
                            Username:
                            
                        </label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            
                        />
                        
                        <label htmlFor="email">
                            Email:
                            
                        </label>
                        <input
                            type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            
                        />


                        <label htmlFor="password">
                            Password:
                            
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            
                        />
                    
                    <button >Sign Up</button>
                    </form>
                    <p>
                        Already registered?<br />
                        <span className="line">
                             {/*put router link here*/}
                             <Link to="/">Login</Link>
                        </span>
                    </p>
                </section>
            
            
            )}
            </>
  )
    }
            

            
export default Register