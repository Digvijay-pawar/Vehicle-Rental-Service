import { useState } from 'react';

export const useResetPassword = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const resetPassword = async (formData) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`vehicle-rental-service-k4mw2w4uo-digvijays-projects-155f00da.vercel.app/api/user/reset-password?token=${formData.token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${formData.token}`
                },
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

    return { resetPassword, error, isLoading, setIsLoading, setError };
};
