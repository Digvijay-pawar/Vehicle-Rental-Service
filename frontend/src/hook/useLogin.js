import { useState } from 'react';
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext();

    const login = async (formData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('http://localhost:5000/api/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();

            if (!response.ok) {
                const errorMessage = data.message || 'Login failed.';
                if (data.errorCode === 'INVALID_CREDENTIALS') {
                    setError('Invalid email or password.');
                } else if (data.errorCode === 'USER_NOT_FOUND') {
                    setError('User not found.');
                } else {
                    setError(errorMessage);
                }
                return false; // Login failed
            }
            dispatch({type: "LOGIN", payload:data})
            // If login is successful, handle any required logic (e.g., storing tokens)
            localStorage.setItem('authToken', data.token);// Example for storing a token
            return true; // Login successful
        } catch (err) {
            setError(err.message);
            return false; // Login failed
        } finally{
            setIsLoading(false)
        }
    };

    return { login, error, isLoading, setIsLoading, setError };
};
