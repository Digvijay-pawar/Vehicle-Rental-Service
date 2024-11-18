import { useState } from 'react';
import { useProfile } from './useProfile';

const API_URL = import.meta.env.VITE_BACKEND_URL

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { getProfile } = useProfile();

    const login = async (formData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(`${API_URL}/api/user/login`, {
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

            localStorage.setItem('authToken', data.token);
            
            await getProfile(data.token); 
            return true; // Login successful
        } catch (err) {
            setError(err.message);
            return false; // Login failed
        } finally {
            setTimeout(() => { setIsLoading(false) }, 1000)
        }
    };

    return { login, error, isLoading, setIsLoading, setError };
};
