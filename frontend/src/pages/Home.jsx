import React, { useContext } from 'react';
import Header from '../components/Header';
import { AuthContext } from '../context/authContext';

function Home() {
    const { user } = useContext(AuthContext);

    return (
        <>
            <Header />
            <div className="user-info">
                {user ? (
                    <>
                        <p>Full Name: {user.fullName}</p>
                        <p>Email: {user.email}</p>
                    </>
                ) : (
                    <p>No user information available. Please log in.</p>
                )}
            </div>
        </>
    );
}

export default Home;
