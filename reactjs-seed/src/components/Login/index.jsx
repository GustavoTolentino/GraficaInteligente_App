import React, { useState } from "react";
import "./styles/style.css";
import { useHistory } from "react-router-dom";
import LoginF from "../Common/Forms/LoginForm";
import LogoNL from "../../assets/img/nucleoImages/LogoNucleoBranca.png"
import LogoGI from "../../assets/img/nucleoImages/GraficaInteligente_FT.png"
import Cartoon from "../../assets/img/nucleoImages/tolentino.png"
import { apiIdentidade } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Login() {
  // const navigate = useNavigate();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();

    console.log("entrou no método");
    try{
      const { data, status } = await apiIdentidade.post("/realizar-entrada", {
        Usuario: email,
        Senha: password,
      });
  
      if (status === 200) {
        localStorage.setItem("userToken", data.dados.jwt);
        history.push('/submenu');
      } else {
        loginError();
      }
      history.push('/submenu')
    }
    catch (error)
    {
      apiError();
      console.log(error);
    }
  };

  const loginError = () => {
    toast.error("Verifique seu Usuario e Senha e tente novamente!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const apiError = () => {
    toast.error("Não foi possível acessar a API no momento, tente novamente mais tarde", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div style={{backgroundColor: "#ffffff"}}>
        <div className="ContentLoginPage">
            <div className="ContentInfoLogin">
              <div style={{width: "100%"}}>
                <img src={LogoNL} style={{ width: "250px", margin: "0 0 0 30px" }} alt="Logo da empresa Nucleo Loguin"/>
              </div>
                <p style={{margin: "0 0 200px 0"}}>Transformando gráficas tradicionais em gráficas inteligentes</p>
                <img className="CartoonImage" src={Cartoon} style={{ width: "100%" }} alt="Imagem cartonizada para se referir a uma gráfica"/>
            </div>
            <div className="LoginFormContentArea">
                <img src={LogoGI} style={{ width: "300px" }} alt="Logo do produto Gráfica Inteligente, para se referir ao sistema"/>
                <LoginF
                  onSubmit={handleSignIn}
                  type="text"
                  placeholder="Usuário"
                  state={email}
                  method={(e) => setEmail(e.target.value)}
                  type2="text"
                  placeholder2="Senha"
                  state2={password}
                  method2={(e) => setPassword(e.target.value)}
                />
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
            </div>
        </div>
    </div>
  );
}