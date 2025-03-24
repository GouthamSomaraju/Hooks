import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router


const Home = () => {
  return (
    <div>
    <nav>
        <ul style={{display: 'flex', justifyContent: 'center', listStyle: 'none',gap: '15px', padding: '10px'}}>
            <h2>
            <Link style={{ textDecoration: 'none', color: 'black' }} to='/home'>Home</Link>
            </h2>
            <h2>
            <Link style={{ textDecoration: 'none', color: 'black' }} to='/products'>Products</Link>
            </h2>
            {/* <h2>
            <Link style={{ textDecoration: 'none', color: 'black' }} to='/login'>Login</Link>
            </h2> */}
        </ul>
    </nav><hr />
    <h1>Welcome This is Home Page</h1>
    </div>
    
  );
}

export default Home;
