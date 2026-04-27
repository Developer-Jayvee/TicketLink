import {  useState } from "react";


export default function useInputHook<T>(initState : T){
    const [formData , setFormData] = useState<T>(() => initState);

    const handleInputChange = <T> (key: keyof T , value : T[keyof T]) => {
        console.log(1);
        
        setFormData(
            (prev) => ({
                ...prev,
                [key] : value
            })
        );
    }
    const resetFormData = () => {
        setFormData(initState);
    }
    return {
        handleInputChange,
        setFormData,
        resetFormData,
        formData
    }
}