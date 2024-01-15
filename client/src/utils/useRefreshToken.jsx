import { useEffect } from "react";
import { useDispatch } from 'react-redux'; 
import { fetchNewAccesToken } from "../redux/refreshAccesTokenSlice";

const useRefreshToken = () => {
    
    const dispatch = useDispatch(); 

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(fetchNewAccesToken()); 
        }, 1000*60*9); 

        return () => clearInterval(interval); 
    }, [dispatch]); 
    
}; 

export default useRefreshToken; 