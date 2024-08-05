import React, { useState } from 'react';
import './DonationForm.css';

const DonationForm = () => {
    const [amount, setAmount] = useState('100.00');
    const [paymentMethod, setPaymentMethod] = useState('credit-card');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        cardNumber: '',
        cvc: '',
        cardholderName: '',
        expiration: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData, amount, paymentMethod);
    };

    return (
        <form className="donation-form" onSubmit={handleSubmit}>
            <div className="amount-selection">
                <input style={{ width: 100 }}
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <div className="preset-amounts">
                    <button type="button" onClick={() => setAmount('100.00')}>100,00 $</button>
                    <button type="button" onClick={() => setAmount('150.00')}>150,00 $</button>
                    <button type="button" onClick={() => setAmount('200.00')}>200,00 $</button>
                    <button type="button" onClick={() => setAmount('')}>Custom</button>
                </div>
            </div>

            <div className="payment-method">
                <b>Select Payment Method</b>
                <label>
                    <input style={{ marginTop: 10 }}
                        type="radio"
                        name="payment-method"
                        value="offline"
                        checked={paymentMethod === 'offline'}
                        onChange={() => setPaymentMethod('offline')}
                    />
                    Offline Donation
                </label>
                <label>
                    <input
                        type="radio"
                        name="payment-method"
                        value="credit-card"
                        checked={paymentMethod === 'credit-card'}
                        onChange={() => setPaymentMethod('credit-card')}
                    />
                    Credit Card
                </label>
                <label>
                    <input
                        type="radio"
                        name="payment-method"
                        value="paypal"
                        checked={paymentMethod === 'paypal'}
                        onChange={() => setPaymentMethod('paypal')}
                    />
                    PayPal
                </label>
            </div>

            <div className="personal-info">
                <b>Personal Info</b>
                <div className="name-fields">
                    <div style={{ marginTop: 10 }}>
                        <label>First Name *</label>
                        <input style={{ width: 180 }}
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <label>Last Name *</label>
                        <input style={{ width: 180 }}
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div>
                    <label>Email Address *</label>
                    <input style={{ width: 385 }}
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className="credit-card-info">
                <b>Credit Card Info</b>
                <div className="card-fields">
                    <div style={{ marginTop: 10 }}>
                        <label>Card Number *</label>
                        <input style={{ width: 250 }}
                            type="text"
                            name="cardNumber"
                            placeholder="Card Number"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <label style={{ marginLeft: 75 }}>CVC *</label>
                        <input style={{ marginLeft: 75, width: 100 }}
                            type="text"
                            name="cvc"
                            placeholder="CVC"
                            value={formData.cvc}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="card-fields">
                    <div>
                        <label>Cardholder Name *</label>
                        <input style={{ width: 250 }}
                            type="text"
                            name="cardholderName"
                            placeholder="Cardholder Name"
                            value={formData.cardholderName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label style={{ marginLeft: 75 }}>Expiration *</label>
                        <input style={{ marginLeft: 75, width: 100 }}
                            type="text"
                            name="expiration"
                            placeholder="MM / YY"
                            value={formData.expiration}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
            </div>

            <div className="donation-total">
                <label>Donation Total:</label>
                <span>${amount}</span>
            </div>

            <button type="submit" className="donate-button">Donate Now</button>
        </form>
    );
};

export default DonationForm;
