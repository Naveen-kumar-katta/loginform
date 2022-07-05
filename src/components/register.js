import { Link } from "react-router-dom";
import React,{useState} from 'react';
function Register() {
    return (
        <form>
            <center><big>
                <div className="form-inner">
                    <h2><font color="white">RENTAL PRICE ESTIMATION</font></h2>
                    <h3><font color="white">SIGNUP</font></h3>
                </div>
                <big><div className="form-group">
                    <label><font color="white">Name:   </font></label>
                    <input type='text' name="name" id="name"/>
                </div></big><br/>
                <big><div className="form-group">
                    <label><font color="white">Email:        </font></label>
                    <input type='email' name="email" id="email"/>
                </div></big><br/>
                <big><div className="form-group">
                    <label><font color="white">Password:</font></label>
                    <input type='password' name="password" id="password"/>
                </div></big><br/>
                <div>
                    <Link to='/'>
                        <button type="button">Register</button>
                    </Link>
                </div>
                </big></center>
        </form>
    )
}
export default Register;