import type { FormEvent, ReactNode } from "react";


export type InputTypes = "text" | "password";
export interface InputInterface {
    type : InputTypes;
    placeholder : string;
    inputName: string;
    onInputChange ?: (value : string , name : string) => void;
}

export interface AuthFormInterface {
    children : ReactNode;
    customCss ?: string;
    subTitle ?: string;
    onSubmitForm ?: (e : FormEvent<HTMLFormElement>) => void;
    isSubmitDisabled: boolean;
}