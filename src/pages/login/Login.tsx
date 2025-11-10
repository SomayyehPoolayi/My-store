import React, { useState} from "react";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Login() {
  const { handleSetLogin } = useShoppingCartContext();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name,value}=e.target;
    setUser({
        ...user, 
        [name]:value,
    })
  };

  return (
    <div>
      <Container>
        <div className="bg-slate-300 p-12 rounded ">
          <input
            type="text"
            placeholder="username"
            onChange={handleChange}
            name=" username"
            value={user.username}
          />
          <input
            type="password"
            placeholder="password"
            onChange={handleChange}
            name="password"
            value={user.password}
          />
          <Button onClick={()=>handleSetLogin(user.username,user.password)}>login</Button>
        </div>
      </Container>
    </div>
  );
}

export default Login;
