import React from "react";
import { useHistory } from "react-router-dom";
import { LoginFormWrapper } from "./styles/LoginFormWrapper.js";
import { Input } from "../../Input";
import { Button } from "../../Button";
import { FiMail } from "react-icons/fi";
export default function LoginF({
  onSubmit,
  type,
  state,
  method,
  type2,
  state2,
  method2,
  ...props
}) {
  const history = useHistory();
  return (
    <LoginFormWrapper>
      <form onSubmit={onSubmit} className="loginFormBody">
        <h1 className="loginFormTitle">Entre em sua conta</h1>
        <div className="inputsAreaComponent">
          <Input
            mobilelogin={true}
            type={type}
            value={state}
            onChange={method}
            icon={<FiMail/>}
            style={{margin: "10px 0 0 0"}}
          />
          <Input
            type={type2}
            value={state2}
            onChange={method2}
          />
          <Button 
            login
            type="submit"
          >Entrar</Button>
          <Button
            backgroundLess 
            onClick={() => history.push('/mobile/inicio')}
          >Voltar</Button>
        </div>
      </form>
    </LoginFormWrapper>
  );
}