import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Protect = ({ Component }) => {
    const navigate = useNavigate();
    const dashboard = localStorage.getItem("dashboard");

    useEffect(() => {
        if (!dashboard) {
            navigate("/");
        }
    }, [dashboard, navigate]);  // Add dashboard and navigate to the dependency array

    return (
        <>
            <Component />
        </>
    );
};

export default Protect;

