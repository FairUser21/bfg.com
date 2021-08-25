import React from 'react';
import './Footer.css'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div class = "footer-menu"> 
            <div class = "footer-container"> 
                    
                <div>
                    <p><img src="https://static-sl.insales.ru/files/1/1311/14550303/original/Group.svg" /></p>
                    <p><img src="https://static-sl.insales.ru/files/1/1305/14550297/original/Visa.svg" /></p>
                </div>
                <p className="brand">Books For Geek</p>
                <div className="socials">
                        <img src="https://static-sl.insales.ru/files/1/1309/14550301/original/twitter.svg" />
                        <img src="https://static-sl.insales.ru/files/1/1307/14550299/original/vk.svg" />
                        <img src="https://static-sl.insales.ru/files/1/1308/14550300/original/insta.svg" />
                    </div>
            </ div> 
    </ div>
    );
};

export default Footer;