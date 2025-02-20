import React from 'react';
import './PricingPlansSection.css';
import logo from '../../assets/logo.png';

const PricingPlansSection = () => {
    const plans = [
        { title: "CRM For Service", price: "$49 / Month", bgGradient: true },
        { title: "CRM For Sales", price: "$99 / Month", bgGradient: false }
    ];

    return (
        <section className="pricing-section">
            <div className='plan-btn'><span>Plans</span></div>
            <h1>From nothing to something.</h1>
            <p>Choose the perfect plan to scale your business and enhance customer engagement.</p>

            {/* Pricing Cards */}
            <div className='card-container'>
                {plans.map((plan, index) => (
                    <div key={index} className={`card ${plan.bgGradient ? 'gradient-bg' : 'light-bg'}`}>
                        <img src={logo} alt={plan.title} />
                        <h2>{plan.title}</h2>
                        <p>Boost efficiency and maximize sales with powerful CRM tools.</p>
                        <button>
                            <span>{plan.price}</span> 
                            <span><i className="ri-arrow-right-up-line"></i></span>
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default PricingPlansSection;
