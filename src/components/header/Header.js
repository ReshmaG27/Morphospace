import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import './dashboard.css';
import profileImage from '../../images/profile.jpeg';
import d1 from '../../images/d1.png';
import d2 from '../../images/track.jpeg';
import d3 from '../../images/past.jpeg';
import d4 from '../../images/about.jpeg';
import d5 from '../../images/logout.jpeg';
import d6 from '../../images/addreview.jpeg';

function Header() {
  const navigate = useNavigate();
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isDashboardOpen && !event.target.closest('.dashboard')) {
        setIsDashboardOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isDashboardOpen]);

  const toggleDashboard = () => {
    setIsDashboardOpen(!isDashboardOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.toLowerCase() === 'sofa') {
      navigate('/sofa');
    }
    else if (searchTerm.toLowerCase() === 'livingroom'){
      navigate('/livingroom');
    } 
    else if (searchTerm.toLowerCase() === 'diningroom'){
      navigate('/diningroom');
    } 
    else if (searchTerm.toLowerCase() === 'bedroom'){
      navigate('/bedroom');
    } 
    else if (searchTerm.toLowerCase() === 'outdoor'){
      navigate('/outdoor');
    } 
    else if (searchTerm.toLowerCase() === 'office'){
      navigate('/office');
    } 
    else if (searchTerm.toLowerCase() === 'kitchen'){
      navigate('/kitchen');
    } 
    else {
      alert('No results found.');
    }
  };

  return (
    <header>
      <div className="top-header">
        <div className="logo">MORPHOSPACE</div>
        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="What you are looking for?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <span className="search-icon">&#128269;</span> {/* Unicode for magnifying glass */}
          </button>
        </form>


        <nav>
          <ul className="nav-list">
            <li className="nav-item"><a href="/">Home</a></li>
            <li className="nav-item" onClick={() => navigate('/login')}><a>Login</a></li>
            <li className="nav-item" onClick={() => navigate('/review')}><a>Reviews</a></li>
            <li className="nav-item" onClick={() => navigate('/contact')}><a>Contact Us</a></li>
          </ul>
        </nav>

        <div className="icons">
          <span onClick={() => navigate('/wishlist')}>&#129505;</span>
          <span onClick={() => navigate('/cart')}>&#128722;</span>
          <span id="profile-icon" onClick={toggleDashboard}>
            <img src={profileImage} alt="Profile Icon" />
          </span>
        </div>
      </div>

      <div id="dashboard" className={`dashboard ${isDashboardOpen ? 'visible' : 'hidden'}`}>
        <div className="dashboard-header">
          <h2 className='title'>Dashboard</h2>
          <button onClick={toggleDashboard}>✖</button>
        </div>
        <div className="dashboard-content">
          <div className="dashboard-box" 
            onClick={() => { 
              navigate('/edit-profile'); 
              setIsDashboardOpen(false); 
            }}>
            <img src={d1} alt="Profile Icon" />
            <div>
              <h3>EDIT PROFILE</h3>
            </div>
          </div>
          <div className="dashboard-box" 
            onClick={() => { 
              navigate('/tracking'); 
              setIsDashboardOpen(false); 
            }}>
            <img src={d2} alt="Orders Icon" />
            <div>
              <h3>TRACK ORDER</h3>
            </div>
          </div>
          <div className="dashboard-box" 
            onClick={() => { 
              navigate('/pastorders'); 
              setIsDashboardOpen(false); 
            }}>
            <img src={d3} alt="Pastorders Icon" />
            <div>
              <h3>PAST ORDERS</h3>
            </div>
          </div>
          <div className="dashboard-box" 
            onClick={() => { 
              navigate('/about'); 
              setIsDashboardOpen(false); 
            }}>
            <img src={d4} alt="Settings Icon" />
            <div>
              <h3>ABOUT</h3>
            </div>
          </div>
          <div className="dashboard-box" 
            onClick={() => { 
              navigate('/add_review'); 
              setIsDashboardOpen(false); 
            }}>
            <img src={d6} alt="Settings Icon" />
            <div>
              <h3>ADD REVIEW</h3>
            </div>
          </div>
          <div className="dashboard-box" 
            onClick={() => { 
              navigate('/logout'); 
              setIsDashboardOpen(false); 
            }}>
            <img src={d5} alt="Logout Icon" />
            <div>
              <h3>Logout</h3>
            </div>
          </div>
        </div>
        <div className="dashboard-footer">
          <p>&copy; 2024 Furniture Store</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
