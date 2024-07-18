import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    
    localStorage.setItem("email", email); 
    localStorage.setItem("password", password); 
    
    navigate("/product");
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="***"
        name="password"
      />

      <Button className="bg-blue-600 w-full" type="submit">Login</Button>
    </form>
  );
};

export default FormLogin;