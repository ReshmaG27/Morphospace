import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddressPage = () => {
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleAddressSubmit = () => {
        if (!address) {
            setError('Please enter your address');
        } else {
            setError('');
            navigate('/payment'); // Navigate to Payment Page
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '600px',
                margin: '50px auto',
                padding: '20px',
                backgroundColor: '#fff',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
        >
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Enter Your Address</h1>
            
            {/* Address Input */}
            <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your delivery address"
                style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: '16px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    marginBottom: '15px',
                    outline: 'none',
                }}
            />

            {/* Error Message */}
            {error && (
                <p style={{ color: 'red', fontSize: '14px', marginBottom: '10px' }}>{error}</p>
            )}

            {/* Submit Button */}
            <button
                onClick={handleAddressSubmit}
                style={{
                    width: '100%',
                    padding: '15px',
                    fontSize: '18px',
                    backgroundColor: '#3498db',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                }}
            >
                Proceed to Payment
            </button>
            
            {/* Cancel Button */}
            <button
                onClick={() => navigate('/')}
                style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: '16px',
                    backgroundColor: '#e74c3c',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginTop: '10px',
                    transition: 'background-color 0.3s ease',
                }}
            >
                Cancel Order
            </button>
        </div>
    );
};

export default AddressPage;
