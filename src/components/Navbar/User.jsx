import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faLock  } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import background from '../Assets/Images/mugs1.JPG';

const User = () => {
  return (
    <div className="box" style={{backgroundImage: `url(${background})`}}>
        <div className='container box-container'>
            <div className='top-header'>
                <span className='title'>Have an account?</span>
                <div className='login'>Login</div>
            </div>
            
            <div className='input-field'>
                <input type="text" className='form-input' placeholder='Username' required/>
                <FontAwesomeIcon icon={faUser} className='icon'/>
            </div>
            <div className='input-field'>
                <input type="password" className='form-input' placeholder='Password' required/>
                <FontAwesomeIcon icon={faLock} className='icon'/>
            </div>
            <div className='input-field'>
                <Button className='submit custom-btn' variant="outline-light"> 
                Log in</Button>
            </div>
            <div className="bottom">
                <div className="left">
                    <input type="checkbox" id="check" className='checkbox'/>
                    <label htmlFor="check" className='remember'>Remember me</label>
                </div>
                <div className="right">
                    <label> <a href="#">Forgot password?</a></label>
                </div>
            </div>
        </div>
    </div>
)
}

export default User