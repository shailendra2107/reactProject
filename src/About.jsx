import React from 'react';
import { NavLink } from 'react-router-dom';
import Commen from './Commen';
import about from './img/about.svg'

const About = () => {
    return (
        <>
            <Commen name='Welcome to About Us'
                imgsrc={about}
                visit='/contact'
                para='Get the best websites developing solutions here!!!
                Need an websites with best interface?  Contact us'
                btnName='Contact Now' />
        </>
    )

};
export default About