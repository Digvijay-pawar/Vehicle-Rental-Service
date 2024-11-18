import { useAuthContext } from './useAuthContext'

export const useProfile = () => {
    const { dispatch } = useAuthContext();
    const getProfile = async (token) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user/profile`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            const data = await response.json();
            console.log(data)
            if (!response.ok) {
                // Set a detailed error message
                const errorMessage = data?.message || 'Profile fetching process failed.';
                return false;
            }
            dispatch({type: "LOGIN", payload:data})
            return true; // Process succeeded
        } catch (err) {
            // Handle network or unexpected errors
            const networkErrorMessage = err?.message || 'An unexpected error occurred.';
            return false;
        }
    }
    return { getProfile };
}