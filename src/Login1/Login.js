import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import PhoneIcon from '@mui/icons-material/Phone';
import LockIcon from '@mui/icons-material/Lock';


function Login () {

    const [user_mobile, setUser_mobile] = useState('');
    const [user_pin, setUser_pin] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    let navigate = useNavigate();

    const handleLogin = () => {        
            navigate('/dashboard');
    }


        return (
            <div style={{textAlign:'center'}}>
                <h2>Bizwy</h2><br/><br/>
                <div style={{justifyContent:'space-between'}}>
                <div>
                    <div style={{display:'inline-block'}}>
                    <PhoneIcon/><input type="number" value={user_mobile} placeholder='Mobile number' required
                                        style={{position:'relative',width:'200px',height:'20px',marginTop:'-20px'}}
                                        onChange={e => setUser_mobile(e.target.value)} />
                    </div>
                </div>
                <div>
                    <LockIcon/><input type="password" value={user_pin} placeholder='Password'
                                        style={{position:'relative',width:'200px',height:'20px',marginTop:'-20px'}}
                                            onChange={e => setUser_pin(e.target.value)} />
                </div><br/>
                </div>
                {error && <div className='error'>{error}</div>}
                <input style={{background:"skyblue", width:"200px", marginLeft:'25px'}}
                        type="button"
                        value={loading ? "Loading..." : "Login" } 
                        disabled={loading} onClick={handleLogin}/>
            </div>
        )
    }

export default Login;
