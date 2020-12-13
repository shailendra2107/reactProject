import React from 'react';
import { NavLink } from 'react-router-dom';
import Commen from './Commen';
import home from './img/home.svg'

const Home = () => {
    return (
        <>
            <Commen name='Grow Your Business With'
                imgsrc={home}
                visit='/service'
                para='We are the team of telented developer making websites'
                btnName='Get Started' />
        </>
    )

};
export default Home