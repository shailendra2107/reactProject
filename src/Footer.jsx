import React from 'react';

const Footer = () => {

    const curDate = new Date().getFullYear()
    return (
        <>
            <footer className='mt-auto w-100 bg-light text-center'>
                <p>©️ {curDate} Khushiyaan. All Rights Reserved | Terms and Condition Apply</p>
            </footer>
        </>

    )
}
export default Footer