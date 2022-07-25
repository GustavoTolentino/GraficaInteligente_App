import React from "react";
import { LoginFormWrapper } from "./styles/LoginFormWrapper.js";
import { Input } from "../../Input";
import { Button } from "../../Button";
export default function LoginF({
  onSubmit,
  type,
  placeholder,
  state,
  method,
  type2,
  placeholder2,
  state2,
  method2,
  ...props
}) {
  return (
    <LoginFormWrapper>
      <form onSubmit={onSubmit} className="loginFormBody">
        <h1 className="loginFormTitle">Entre em sua conta!</h1>
        <div className="inputsAreaComponent">
          <Input
            type={type}
            placeholder={placeholder}
            value={state}
            onChange={method}
            style={{margin: "10px 0 0 0"}}
          />
          <Input
            type={type2}
            placeholder={placeholder2}
            value={state2}
            onChange={method2}
          />
          <a className="forgotPasswordDiv">Esqueceu sua senha?</a>
          <Button 
            login 
            type="submit"
          >ENTRAR</Button>
        </div>
      </form>
    </LoginFormWrapper>
  );
}