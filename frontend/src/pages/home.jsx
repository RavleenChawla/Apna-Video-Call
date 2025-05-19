import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {


    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");


    const {addToUserHistory} = useContext(AuthContext);
    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

    return (
        <>

            <div className="navBar">

                <div id = "title" style={{ display: "flex", alignItems: "center" }}>

                    <h2>Apna Video Call</h2>
                </div>

                <div id ="clock" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <IconButton id = "icon-clock"onClick={
                        () => {
                            navigate("/history")
                        }
                    }>
                        <RestoreIcon />
                    </IconButton>
                    <p id = "history">History</p>

                    <Button id = "logout" onClick={() => {
                        localStorage.removeItem("token")
                        navigate("/auth")
                    }}>
                        Logout
                    </Button>
                </div>


            </div>


        <div className='rightPanel'>
                    <img srcSet='/logo3.png' alt="" />
                </div>

            <div className="meetContainer">
                <div className="leftPanel">
                    <div>
                        <h2>Providing Quality Video Call Just Like Quality Education</h2>

                        <div style={{ display: 'flex'  }}>

                            <TextField onChange={e => setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting Code" variant="outlined" />
                            <Button onClick={handleJoinVideoCall} variant='contained'>Join</Button>

                        </div>
                    </div>
                </div>
                {/* <div className='rightPanel'>
                    <img srcSet='/logo3.png' alt="" />
                </div> */}
            </div>

<footer className="footer">
  <div className="footer-container">
    <div className="footer-brand">
      <h2>Apna Video Call</h2>
      <p>Connect beyond boundaries with our seamless video experience.</p>
    </div>

    <div className="footer-links">
      <h4>Quick Links</h4>
<ul>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/auth">Login</Link></li>
  <li><Link to="/auth">Register</Link></li>
  <li><Link to="/aljk23">Join as Guest</Link></li>
</ul>
    </div>

    <div className="footer-social">
      <h4>Follow Us</h4>
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© {new Date().getFullYear()} Apna Video Call. All rights reserved.</p>
  </div>
</footer>
         
            
        </>
    )
}


export default withAuth(HomeComponent)