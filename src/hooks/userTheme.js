import { useContext } from "react";
import { UserContext } from "../context/UserContext";
export const useUserTheme =()=>{
    const context = useContext(UserContext);
    if(!context){
        throw new Error('useUserTheme must be used within a UserProvider');
    }
    return context
}