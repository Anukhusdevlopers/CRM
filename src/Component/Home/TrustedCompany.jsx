import React from 'react';
import './TrustedCompany.css';

const TrustedCompany = () => {
    return (
        <section className="trusted-company-section">
            <div className="trusted-company-card">
                <p>Trusted by the world's best companies</p>
                <div className="trusted-companies-container">
                    <h1>Google</h1>
                    <h1>Microsoft</h1>
                    <h1>Amazon</h1>
                    <h1>Apple</h1>
                    <h1>Facebook</h1>
                </div>
            </div>
        </section>
    );
}

export default TrustedCompany;
