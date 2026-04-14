import { useEffect, useState, type FormEvent } from "react";
import Input from "../../../shared/components/Input";
import AuthForm from "./AuthForm";

interface LoginFormInterface {
  username : string;
  password : string;
}
export default function LoginForm() {
  const [canSubmit , setCanSubmit] = useState(false);
  const [formData , setFormData] = useState<LoginFormInterface>({
    username : "",
    password : ""
  })
  const submitForm = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");
  }
  const handleInputChange = (value : string , name : keyof LoginFormInterface) => {
    setFormData( (prev) => ({...prev,[name] : value}));
  }

  useEffect( () => {
    setCanSubmit(
      !!(formData.username.trim() && formData.password.trim())
    )    
  },[formData])
  return (
    <AuthForm customCss="flex flex-col gap-2" onSubmitForm={(e) => submitForm(e)} isSubmitDisabled={!canSubmit}>
      <Input
        inputName="username"
        labelName="Username"
        type="text"
        placeholder="Input username"
        onInputChange={handleInputChange}
      />
      <Input
        inputName="password"
        labelName="Password"
        type="password"
        placeholder="Input password"
        onInputChange={handleInputChange}
      />
    </AuthForm>
  );
}
