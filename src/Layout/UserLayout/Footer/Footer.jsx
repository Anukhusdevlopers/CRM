import React from 'react'
import './Footer.css'
import logo from '../../../assets/FooterLogo.png'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-section">
                    <div style={{ display: "flex", gap: '4px', alignItems: 'center',marginBottom:'20px' }}>
                        <img style={{ scale: 0.7 }} src={logo} alt="" />
                        <h1 style={{ color: ' #100a30', fontSize: '1.6rem' }}>CRM+</h1>
                    </div>
                    <div className='content-cnct'>
                        <div className="footer-left-content">
                            <div className="footer-content-col">
                                <h2>Invest</h2>
                                <p>Business CRM</p>
                                <p>Email Marketing</p>
                                <p>Sales Automation</p>
                                <p>Fundrising</p>
                            </div>

                            <div className="footer-content-col">
                                <h2>Pricing</h2>
                                <p>Business CRM</p>
                                <p>Email Marketing</p>
                                <p>Sales Automation</p>

                            </div>

                            <div className="footer-content-col">
                                <h2>Company</h2>
                                <p>Business CRM</p>
                                <p>Email Marketing</p>
                                <p>Sales Automation</p>
                                <p>Fundrising</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer