import { useEffect, useState, type FormEvent } from "react";
import Input from "../../../shared/components/Input";
import AuthForm from "./AuthForm";
import { useNavigate } from "react-router-dom";
import useMutationHook from "../../../hooks/useMutationHook";
import { AuthService } from "../services/AuthService";

interface LoginFormInterface {
  username: string;
  password: string;
}
export default function LoginForm() {
  const loginMutation = useMutationHook<LoginFormInterface>({ endpoint: '/login', type: "POST", contentType: { 'Content-Type': 'application/json' } });
  const navigate = useNavigate();
  const [canSubmit, setCanSubmit] = useState(false);
  const [formData, setFormData] = useState<LoginFormInterface>({
    username: "",
    password: ""
  })
  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    if (!username || !password) {
      alert('Please complete fields');
      return
    }
    try {
      const response = loginMutation.mutateAsync({ username, password });
      response.then( async (res) => {
        const data = await res.json();
        if(!res.ok) return alert('Error upon login.');

        AuthService.login(data);
        await navigate('/chat-room/chats');
      })
    } catch (error) {
      alert(error)
    }
  }
  const handleInputChange = (value: string, name: keyof LoginFormInterface) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  useEffect(() => {
    setCanSubmit(
      !!(formData.username.trim() && formData.password.trim())
    )
  }, [formData])
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
