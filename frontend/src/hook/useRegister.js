import { useState } from 'react';

export const useRegister = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const register = async (formData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('http://localhost:5000/api/user/register', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log("asd",response, data)
            if (!response.ok) {
                const errorMessage = data.message || 'Registration failed.';
                if (data.errorCode === 'DUPLICATE_EMAIL') {
                    setError('Email already in use.');
                } else if (data.errorCode === 'DUPLICATE_PHONE') {
                    setError('Phone number already in use.');
                } else {
                    setError(errorMessage);
                }
                return false;
            }
            return true;
        } catch (err) {
            setError(err.message);
            return false;
        } finally {
            setTimeout(() => {setIsLoading(false)}, 1000)
        }
    };    

    return { register, error, setIsLoading, isLoading, setError };
};
