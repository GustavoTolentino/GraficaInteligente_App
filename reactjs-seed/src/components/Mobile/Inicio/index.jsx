import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LogoGI from "../../../assets/img/nucleoImages/GraficaInteligente_FT.png";
import "./styles/style.css";
import { Button } from "../../Common/Button";
import { ActionButton } from "../../Common/ActionButton";
import { BsFillCameraFill, BsFillGearFill } from "react-icons/bs"
import { IoMdQrScanner } from "react-icons/io"
import { AiOutlineClose } from "react-icons/ai";
import { BiImport } from "react-icons/bi"
import DataGrid from "../../Common/DataGrid";
import { EtiquetaScanner } from "../EtiquetaScanner";
import { useMediaQuery } from 'react-responsive';
import { useEffect } from "react";

export function Inicio() {
  const history = useHistory();
  const [boolModal, setBoolModal] = useState(false);
  const [arrayEtiquetas, setArrayEtiquetas] = useState([]);

  const OpenCloseModal = () =>
  {
    if(boolModal === false)
        setBoolModal(true);
    else
        setBoolModal(false);
  }

  function setNewEtiqueta(newEtiqueta){
    setArrayEtiquetas(arrayEtiquetas + newEtiqueta);
    window.location.reload();
  }

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const tituloTable = ["Jocta", "Vinicio", "Gustavo"];

  return (
    
    <div className="contentArea">
        <div className="mobileInicioContent">
            <img src={LogoGI} style={{width: "350px"}} alt="Logo do software Grafica Inteligente."/>
            <h1>Bem-vindo, Joao!</h1>

            { boolModal && isMobile && (
            <EtiquetaScanner 
                closeModalMethod={OpenCloseModal}
                methodUpdateArray={setNewEtiqueta}
            />)}

            <div className="actionsArea">
                <h2>Ações</h2>
                
                <div className="actionsButtonsArea">
                    { isMobile && (
                        <ActionButton
                            method={OpenCloseModal}
                            icon={<BsFillCameraFill/>}
                            actionText="Etiquetas"
                        />
                    )}
                    { !isMobile && (
                        <ActionButton
                            icon={<IoMdQrScanner/>}
                            actionText="Scannear"
                        />
                    )}
                    { !isMobile && (
                        <ActionButton
                            icon={<BiImport/>}
                            actionText="Importar"
                        />
                    )}
                    <ActionButton
                        icon={<BsFillGearFill/>}
                        actionText="Configurar"
                    />
                </div>
            </div>

            <div className="tagMobileArea">
                <h2>Etiquetas Pendentes</h2>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Etiqueta</th>
                            <th scope="col">Acoes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arrayEtiquetas.map((etiqueta) => (
                            <tr>
                                <th>{etiqueta.key}</th>
                                <td>{etiqueta}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Button>Gravar</Button>
            </div>
        </div>
    </div>
  );
}