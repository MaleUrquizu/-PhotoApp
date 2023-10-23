import React from 'react';
import { useNavigate } from 'react-router-dom';
import ShowPosts from '../ApiCrud/ShowPosts.jsx'
import '../Home/Home.css';

export const Home = () => {
    const backgroundImageUrl = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    const containerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: '100% 100%', // Cubre toda la pantalla
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        minHeight: '100vh',
        margin: 0,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        textAlign: 'center',
    };

    const navigate = useNavigate();

    const handleGetStartedClick = () => {
        navigate('/login');
    };

    return (
        <div>
            <div className="container" style={containerStyle}>
                <h1>Welcome to Our Photo Sharing Platform</h1>
                <p>Share your amazing moments with the world. Upload and showcase your photos.</p>
                <button className="btn btn-primary" onClick={handleGetStartedClick}>Get Started</button>
            </div>
            <div className='container-posts'>
                <ShowPosts />
            </div>
        </div>
    );
}
