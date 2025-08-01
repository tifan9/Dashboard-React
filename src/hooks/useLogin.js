import { useContext } from "react";
import { LoginUserContext } from "../context/LoginUserContext";
export const useLoginUser = () => {
    const context = useContext(LoginUserContext);
    if (!context) {
        throw new Error('useLoginUser must be used within a LoginUserProvider');
    }
    return context;
};