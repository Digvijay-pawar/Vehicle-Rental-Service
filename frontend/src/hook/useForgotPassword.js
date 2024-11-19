import { useState } from 'react';

export const useForgotPassword = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const forgotPassword = async (formData) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user/forgot-password`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                // Set a detailed error message
                const errorMessage = data?.message || 'Forgot password process failed.';
                setError(errorMessage);
                return false;
            }

            return true; // Process succeeded
        } catch (err) {
            // Handle network or unexpected errors
            const networkErrorMessage = err?.message || 'An unexpected error occurred.';
            setError(networkErrorMessage);
            return false;
        } finally {
            // Simulating a slight delay for UI effects
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        }
    };

    return { forgotPassword, error, isLoading, setIsLoading, setError };
};
