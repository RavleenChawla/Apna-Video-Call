import React, { useState, useEffect } from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'

export default function LandingPage() {
    const router = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 408);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 408);
            if (window.innerWidth > 408) setShowDropdown(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>Apna Video Call</h2>
                </div>

                {!isMobile ? (
                    <div className='navlist'>
                        <p onClick={() => router("/home")}>Join as Guest</p>
                        <p onClick={() => router("/auth")}>Register</p>
                        <div onClick={() => router("/auth")} role='button'>
                            <p>Login</p>
                        </div>
                    </div>
                ) : (
                    <div className="dropdownMenuWrapper">
                        <button className="dropdownToggle" onClick={() => setShowDropdown(!showDropdown)}>
                            ☰
                        </button>
                        {showDropdown && (
                            <div className="dropdownContent">
                                <p onClick={() => { router("/home"); setShowDropdown(false); }}>👤 Join as Guest</p>
                                <p onClick={() => { router("/auth"); setShowDropdown(false); }}>📝 Register</p>
                                <p onClick={() => { router("/auth"); setShowDropdown(false); }}>🔑 Login</p>
                            </div>
                        )}
                    </div>
                )}
            </nav>

            <div className="landingMainContainer">
                <div>
                    <h1><span style={{ color: "#FF9839" }}>Connect</span> with your loved Ones</h1>
                    <p>Cover a distance by Apna Video Call</p>
                    <div role='button'>
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                <div>
                    <img src="/mobile.png" alt="" />
                </div>
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
        </div>
    )
}

