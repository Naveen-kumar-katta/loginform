import { Link } from "react-router-dom";
import React,{useState} from 'react';
import Register from './register';

function Login() {
    return (
        <div>
        <form>
        <center><big><big>
            <div className="form-inner">
                <h2><font color="white">RENTAL PRICE ESTIMATION</font>
                </h2>
                <h3><font color="white">LOGIN</font></h3>
            </div>
            <big><div className="form-group">
                <label htmlFor="name"><font color="white">Name:    </font></label>
                <input type='text' name="name" id="name"/>
            </div></big><br/>
            <div className="form-group">
                <label htmlFor="name"><font color="white">Email:   </font></label>
                <input type='email' name="email" id="email"/>
            </div><br/>
            <div className="form-group">
                <label htmlFor="name"><font color="white">Password:</font></label>
                <input type='password' name="password" id="password"/>
            </div><br/>
            <div>
                <Link to='/calculation'>
                    <button type="submit">Login</button>
                </Link>
            </div><br/>
            <div>
                <Link to='/register'>
                    <li><font color="white">Register now</font></li>
                </Link>
            </div>
            </big></big>
        </center>
        </form></div>
    )
}
export default Login;