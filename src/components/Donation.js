import React, { useState } from 'react';
import './Donation.css';

const Donation = () => {
  const [amount, setAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [email, setEmail] = useState('');
  const [panCard, setPanCard] = useState('');

  const predefinedAmounts = [500, 1000, 2000, 5000];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle donation submission
    console.log('Donation submitted:', { amount, donorName, email, panCard });
  };

  return (
    <section className="donation" id="donation">
      <div className="container">
        <div className="donation-content">
          <div className="donation-info">
            <h2>Support Our Mission</h2>
            <p className="subtitle">Help us empower more lives through skill development</p>
            <div className="donation-benefits">
              <div className="benefit">
                <span className="benefit-icon">🎓</span>
                <h3>Education for All</h3>
                <p>Your donation helps provide quality skill training to underprivileged students</p>
              </div>
              <div className="benefit">
                <span className="benefit-icon">💰</span>
                <h3>Tax Benefits</h3>
                <p>Get tax exemption under 80G of the Income Tax Act</p>
              </div>
              <div className="benefit">
                <span className="benefit-icon">🤝</span>
                <h3>Transform Lives</h3>
                <p>Support youth in building sustainable careers</p>
              </div>
            </div>
          </div>
          <div className="donation-form-container">
            <form onSubmit={handleSubmit} className="donation-form">
              <h3>Make a Donation</h3>
              <div className="amount-buttons">
                {predefinedAmounts.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    className={`amount-btn ${amount === amt.toString() ? 'active' : ''}`}
                    onClick={() => setAmount(amt.toString())}
                  >
                    ₹{amt}
                  </button>
                ))}
              </div>
              <div className="form-group">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter custom amount"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={panCard}
                  onChange={(e) => setPanCard(e.target.value)}
                  placeholder="PAN Card Number (Optional)"
                />
              </div>
              <button type="submit" className="donate-btn">
                Donate Now
              </button>
              <div className="secure-payment">
                <span className="lock-icon">🔒</span>
                <p>Secure Payment | 100% Tax Exemption under 80G</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
