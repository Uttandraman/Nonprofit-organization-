import React, { useState } from "react";
import img from "./assets/upi.jpg";
import "./DonationForm.css";
import axios from "axios";

const DonationForm = () => {
  const [amount, setAmount] = useState("100.00");
  const [paymentMethod, setPaymentMethod] = useState("offline");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: "",
    cvc: "",
    cardholderName: "",
    expiration: "",
    upiId: "", 
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const donationData = {
    id: formData.email, 
    cvc: formData.cvc,
    email: formData.email,
    upiId: paymentMethod === "upi" ? formData.upiId : null, 
    amount: parseFloat(amount),
    firstName: formData.firstName,
    lastName: formData.lastName,
    cardNumber:
      paymentMethod === "credit-card"
        ? parseInt(formData.cardNumber, 10)
        : null, 
    expiration: paymentMethod === "credit-card" ? formData.expiration : null,
    paymentMethod,
    cardholderName:
      paymentMethod === "credit-card" ? formData.cardholderName : null, 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/donationform",
        donationData
      );

      if (response.status === 200) {
        console.log("Form submitted successfully:", response.data);
        setIsSubmitted(true);
      } else {
        console.error("Failed to submit form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const closeModal = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      <div className="form-scroll-container">
        <form className="donation-form" onSubmit={handleSubmit}>
          <div className="amount-selection">
            <input
              style={{ width: 100 }}
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div className="preset-amounts">
              <button type="button" onClick={() => setAmount("100.00")}>
                100.00 $
              </button>
              <button type="button" onClick={() => setAmount("150.00")}>
                150.00 $
              </button>
              <button type="button" onClick={() => setAmount("200.00")}>
                200.00 $
              </button>
              <button type="button" onClick={() => setAmount("")}>
                Custom
              </button>
            </div>
          </div>

          <div className="payment-method">
            <b>Select Payment Method</b>
            <label>
              <input
                style={{ marginTop: 10 }}
                type="radio"
                name="payment-method"
                value="offline"
                checked={paymentMethod === "offline"}
                onChange={() => setPaymentMethod("offline")}
              />
              Offline Donation
            </label>
            <label>
              <input
                type="radio"
                name="payment-method"
                value="credit-card"
                checked={paymentMethod === "credit-card"}
                onChange={() => setPaymentMethod("credit-card")}
              />
              Credit Card
            </label>
            <label>
              <input
                type="radio"
                name="payment-method"
                value="upi"
                checked={paymentMethod === "upi"}
                onChange={() => setPaymentMethod("upi")}
              />
              UPI
            </label>
          </div>

          <div className="personal-info">
            <b>Personal Info</b>
            <div className="name-fields">
              <div style={{ marginTop: 10 }}>
                <label>First Name *</label>
                <input
                  style={{ width: 180 }}
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
                <input
                  style={{ width: 180 }}
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
              <input
                style={{ width: 385 }}
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {paymentMethod === "credit-card" && (
            <div className="credit-card-info">
              <b>Credit Card Info</b>
              <div className="card-fields">
                <div style={{ marginTop: 10 }}>
                  <label>Card Number *</label>
                  <input
                    style={{ width: 250 }}
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
                  <input
                    style={{ marginLeft: 75, width: 100 }}
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
                  <input
                    style={{ width: 250 }}
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
                  <input
                    style={{ marginLeft: 75, width: 100 }}
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
          )}

          {paymentMethod === "upi" && (
            <div className="upi-info">
              <b>UPI Info</b>
              <div style={{ marginTop: 10 }}>
                <label>UPI ID *</label>
                <input
                  style={{ width: 385 }}
                  type="text"
                  name="upiId"
                  placeholder="Your UPI ID"
                  value={formData.upiId}
                  onChange={handleChange}
                  required
                />
              </div>
              <div style={{ marginTop: 20 }}>
                <b>OR Scan QR Code:</b>
                <div>
                  <img
                    src={img}
                    alt="QR Code"
                    style={{ width: 150, height: 150 }}
                  />
                </div>
              </div>
            </div>
          )}

          {paymentMethod === "offline" && (
            <div className="offline-info">
              <b>Offline Donation Info</b>
              <p>
                Please follow the instructions to donate offline. Contact our
                office for more details.
              </p>
              <button
                style={{
                  backgroundColor: "green",
                  width: 80,
                  height: 30,
                  color: "white",
                  borderRadius: 20,
                  marginLeft: 150,
                }}
              >
                Done
              </button>
            </div>
          )}

          {paymentMethod !== "offline" && (
            <>
              <div className="donation-total">
                <label>Donation Total:</label>
                <span>${amount}</span>
              </div>

              <button type="submit" className="donate-button">
                Donate Now
              </button>
            </>
          )}
        </form>

        {isSubmitted && (
          <div className="modal-overlay">
            <div className="modal">
              <h2>Thank you for your donation, {formData.firstName}!</h2>
              <p>Your contribution is greatly appreciated.</p>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DonationForm;
