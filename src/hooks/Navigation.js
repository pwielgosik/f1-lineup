import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul className='navigation-ul'>
                <Link to='/'>
                    <li className='navigation-li'>Home</li>
                </Link>
                <Link to='/drivers'>
                    <li className='navigation-li'>Drivers</li>
                </Link>
                <Link to='/calendar'>
                    <li className='navigation-li'>Calendar</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navigation;