import React from 'react';
import { useNavigate } from "react-router-dom";


export default function Dashboard () {

    let navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    }

        return (
            <div style={{textAlign:'center'}}>
                Welcome User!<br/><br/>
                <input type='button' value="Logout"
                        onClick={handleLogout} />
            </div>
        )
    }

