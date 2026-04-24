import {  useState } from "react";


export default function useInputHook<T>(initState : T){
    const [formData , setFormData] = useState<T>(initState);

    const handleInputChange = (key: keyof T , value : string | number) => {
        setFormData(
            (prev) => ({
                ...prev,
                [key] : value
            })
        );
    }
    return {
        handleInputChange,
        formData
    }
}