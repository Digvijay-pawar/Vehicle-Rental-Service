import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useRegister = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dipatch } = useAuthContext();
    const register = async (userData) => {
        setError(null);
        setIsLoading(true);

        const response = await fetch("/api/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        const json = await response.json();

        if (!json.ok) {
            setIsLoading(false);
            setError(json.error);
            return;
        }

        localStorage.setItem("user", JSON.stringify(json));

        dipatch({ type: "LOGIN", payload: json });
        setIsLoading(false);
    }

    return { register, error, isLoading, setError};
}