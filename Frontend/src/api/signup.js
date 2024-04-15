import { useState } from 'react';
import axios from 'axios';

function useSignUp() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const signUp = async (firstName, lastName, email, password) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post('/api/auth/signup', { firstName, lastName, email, password });
            setLoading(false);
            return response.data;
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    };

    return { signUp, loading, error };
}

export default useSignUp;