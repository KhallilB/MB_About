import React, { Component } from 'react';
import './About.css';
import { NavLink } from ''

import Navbar from '../../components/navbar/Navbar';

class About extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="about_container">
                    <h1>About</h1>
                </div>
            </div>
           
        )
    }
}

export default About;