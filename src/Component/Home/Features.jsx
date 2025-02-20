import React from 'react';
import './Features.css';
import logo from '../../assets/logo.png';

const FeaturesSection = () => {
    return (
        <section className="feature-section">
            <div className="feature-container">
                <div className='plan-btn'><span>Features</span></div>
                <h1>Your customers are always connected.</h1>
                <p>Stay ahead with seamless connectivity. Unlock the power of real-time engagement and drive customer satisfaction.</p>

                {/* Feature Cards */}
                <div className='card-container'>
                    {[ 
                        { title: "Contact Analysis", desc: "Gain insights into customer interactions with advanced analytics." },
                        { title: "CRM For Sales", desc: "Streamline your sales process with AI-driven CRM solutions." },
                        { title: "Marketing Automation", desc: "Automate your campaigns and maximize efficiency." },
                        { title: "Customer Support AI", desc: "Enhance support with AI-driven chat and ticketing." },
                        { title: "Data-Driven Decisions", desc: "Leverage data to make smarter business decisions." }
                    ].map((feature, index) => (
                        <div key={index} className="card">
                            <img src={logo} alt={feature.title} />
                            <h2>{feature.title}</h2>
                            <p>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;
