import React, { useState } from 'react';
import c1 from '../../images/COD.png';
import c2 from '../../images/UPI.png';

const PaymentPage = () => {
    const [selectedPayment, setSelectedPayment] = useState(''); // Selected payment method
    const [orderPlaced, setOrderPlaced] = useState(false); // Order confirmation toggle

    const handleConfirmPayment = () => {
        if (selectedPayment) {
            setOrderPlaced(true);
        } else {
            alert('Please select a payment method before confirming.');
        }
    };

    const closeModal = () => {
        setOrderPlaced(false);
    };

    return (
        <div
            style={{
                maxWidth: '800px',
                margin: '50px auto',
                padding: '20px',
                backgroundColor: '#fff',
                borderRadius: '12px',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                fontFamily: 'Poppins, Arial, sans-serif',
            }}
        >
            <h1
                style={{
                    textAlign: 'center',
                    marginBottom: '30px',
                    color: '#333',
                    fontSize: '28px',
                    fontWeight: 'bold',
                }}
            >
                Choose Your Payment Method
            </h1>

            {/* Payment Options */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '20px',
                    marginBottom: '30px',
                }}
            >
                {/* Cash on Delivery Option */}
                <div
                    onClick={() => setSelectedPayment('Cash on Delivery')}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        padding: '20px',
                        backgroundColor: selectedPayment === 'Cash on Delivery' ? '#e3f2fd' : '#f9f9f9',
                        border: selectedPayment === 'Cash on Delivery' ? '2px solid #2196f3' : '2px solid #ddd',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        textAlign: 'center',
                        transition: 'background-color 0.3s ease, border 0.3s ease',
                        boxShadow: selectedPayment === 'Cash on Delivery' ? '0 4px 8px rgba(33, 150, 243, 0.2)' : 'none',
                    }}
                >
                    <img
                        src={c1}
                        alt="Cash on Delivery"
                        style={{ marginBottom: '10px', borderRadius: '8px', width: '70px' }}
                    />
                    <span style={{ color: '#2196f3', fontWeight: 'bold', fontSize: '16px' }}>Cash on Delivery</span>
                </div>

                {/* UPI Payment Option */}
                <div
                    onClick={() => setSelectedPayment('UPI Payment')}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        padding: '20px',
                        backgroundColor: selectedPayment === 'UPI Payment' ? '#f3e5f5' : '#f9f9f9',
                        border: selectedPayment === 'UPI Payment' ? '2px solid #9c27b0' : '2px solid #ddd',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        textAlign: 'center',
                        transition: 'background-color 0.3s ease, border 0.3s ease',
                        boxShadow: selectedPayment === 'UPI Payment' ? '0 4px 8px rgba(156, 39, 176, 0.2)' : 'none',
                    }}
                >
                    <img
                        src={c2}
                        alt="UPI Payment"
                        style={{ marginBottom: '10px', borderRadius: '8px', width: '70px' }}
                    />
                    <span style={{ color: '#9c27b0', fontWeight: 'bold', fontSize: '16px' }}>UPI Payment</span>
                </div>
            </div>

            {/* Buttons */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <button
                    onClick={() => alert('Returning to cart...')}
                    style={{
                        flex: 1,
                        marginRight: '10px',
                        padding: '15px',
                        fontSize: '16px',
                        backgroundColor: '#e57373',
                        color: '#FFF',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                    }}
                >
                    Back to Cart
                </button>
                <button
                    onClick={handleConfirmPayment}
                    style={{
                        flex: 1,
                        marginLeft: '10px',
                        padding: '15px',
                        fontSize: '16px',
                        backgroundColor: '#4caf50',
                        color: '#FFF',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                    }}
                >
                    Confirm Payment
                </button>
            </div>

            {/* Display Selected Payment Method */}
            {selectedPayment && (
                <div
                    style={{
                        marginTop: '20px',
                        padding: '10px',
                        fontSize: '16px',
                        textAlign: 'center',
                        color: '#333',
                        fontWeight: 'bold',
                        borderRadius: '8px',
                        backgroundColor: '#f5f5f5',
                        border: '1px solid #ddd',
                    }}
                >
                    Payment Method: {selectedPayment}
                </div>
            )}

            {/* Order Confirmation Modal */}
            {orderPlaced && (
                <div
                    style={{
                        position: 'fixed',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: '#fff',
                            padding: '30px',
                            borderRadius: '12px',
                            textAlign: 'center',
                            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <h2 style={{ color: '#4caf50', fontWeight: 'bold', marginBottom: '20px' }}>
                            ORDER CONFIRMED!
                        </h2>
                        <p style={{ fontSize: '16px', color: '#333', marginBottom: '20px' }}>
                            Thank you for shopping with us.
                        </p>
                        <button
                            onClick={closeModal}
                            style={{
                                padding: '10px 20px',
                                fontSize: '16px',
                                backgroundColor: '#4caf50',
                                color: '#FFF',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: 'pointer',
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PaymentPage;
