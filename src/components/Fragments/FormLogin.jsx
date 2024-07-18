import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginField, setLoginField] = useState("")
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // const email = event.target.email.value;
    // const password = event.target.password.value;
    
    // localStorage.setItem("email", email); 
    // localStorage.setItem("password", password); 
    
    // navigate("/product");

    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    }
    login(data, (status, res) => {
      if(status){
        console.log("Login successful, navigating to /product")
        localStorage.setItem('token',res)
        navigate("/product");
      } else{
        setLoginField(res.response.data)
         
      }
    })
  };

  const usernameRef = useRef(null)

  useEffect(() => {
    usernameRef.current.focus()
  },[])

  return (
    <form onSubmit={handleLogin}>
      
      <InputForm
        label="username"
        type="text"
        placeholder="Jhon Doe"
        name="username"
        ref={usernameRef}
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="***"
        name="password"
      />

      <Button className="bg-blue-600 w-full" type="submit">Login</Button>
      {loginField && <p className="text-red-500 text-center mt-5">{loginField}</p>}
    </form>
  );
};

export default FormLogin;