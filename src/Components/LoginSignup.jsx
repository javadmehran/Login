import React, { useState } from 'react'
import { FaRegUser } from "react-icons/fa";
import { TbPasswordUser } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
export default function LoginSignup() {
    const [action, setAction] = useState('Sign Up')
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    
    const handleSubmit=()=>{
        const data={
            name,
            email,
            password
        }
      fetch('http://localhost:3002/users',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(data )
      })
      .then(res=>res.json())
      .then(data=>console.log(data))
    }

    const handleLogin=()=>{
        fetch(`http://localhost:3002/users/?email=${email}& password=${password}`)
        .then(res=>res.json())
        .then((data)=>{
           data.map(e=>{
       if(e.email===email&e.password===password){
        alert('welcome')
       }else{
        alert('user not found')
       }
           })
        })
    }
   


    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <siv className='underline'></siv>
            </div>
            <div className='inputs'>

                {action === 'Login' ? <div></div> : <div className='input'>
                    <span><FaRegUser size={22} /></span>
                    <input name="name" type='text' placeholder='Name'
                    onChange={(e)=>setName(e.target.value)}
                    />
                </div>}
                <div className='input'>
                    <span><MdEmail size={22} /></span>
                    <input  name="email" type='email' placeholder='Email' 
                     onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className='input' >
                    <span><TbPasswordUser size={22} /></span>
                    <input  name="password" type='password' placeholder='Password'
                     onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>

            </div>
            <div className='forgot-password'>Lost Password? <span>Click Here!</span></div>
            <div className='submit-container'>
       
                <div  className={action === 'Login' ? 'submit gray' : 'submit'} onClick={() => setAction('Sign Up')}>Sign Up</div>
                <button type='submit' className='submit' onClick={handleSubmit}>OK</button>
                <div className={action === 'Sign Up' ? 'submit gray' : 'submit'} onClick={() => setAction('Login')}>Login</div>
                <button type='submit' className='submit' onClick={handleLogin}>OK</button>
            </div>

        </div>

    )
}
