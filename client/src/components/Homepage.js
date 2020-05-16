import React from 'react'
import {Link} from 'react-router-dom';

const Homepage = () => (
    <div className="home">
        <h1>Hello</h1>
        <h4>What's up?</h4>
        <Link to='/signup' className='btn btn-primary'>
            Sign up
        </Link>
    </div>
)

export default Homepage