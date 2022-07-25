import React, { useEffect, useState } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import { DoubleCard } from '../Common/DoubleCard';
import { Loader } from '../Common/Loader';
import giInternet from '../../services/api';
import { FilterIndicatorBlock } from '../Layout/FilterIndicatorBlock';
import { KeyValueCard } from '../Common/KeyValueCard';
import ReactSpeedometer from "react-d3-speedometer";
import './styles/style.css';
import 'loaders.css/loaders.css';
import 'spinkit/css/spinkit.css';
import axios from 'axios';

export default function Indicadores() {
    const [jsonParametrizacao, setjsonParametrizacao] = useState([]);
    const [canLoadMap, setCanLoadMap] = useState(false);
    const [visible, setVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [simpleColorIndicator, setSimpleColorIndicator] = useState("");
    const [messageValue, setMessageValue] = useState("");
    const userInfo = localStorage.getItem('userToken');

    useEffect(() => {
        getIndicadores();
        comeco();
    }, []);

    async function getIndicadores () {
        try {
            console.log(userInfo);
            giInternet().then(e => {
                const apiIndica = axios.create({
                    baseURL: e
                })
                apiIndica.get("/Inicializador/parametrizacao-inicial?origem=2", {
                    headers: {
                        Authorization: "Bearer " + userInfo
                    }
                }
                ).then(f => {
                    let statusIndicadores = f.request.status;
                    if (statusIndicadores === 200) {
                        setjsonParametrizacao(f.data.dados);
                        setCanLoadScreen();
                    }
                    else{
                        console.log("Houve um erro com a requisição para os indicadores")
                    }
                });
            });
        } catch (error) {
            console.log("Houve um erro com a API: " + error)
        }
    }

    function comeco() {
        document.addEventListener('keydown', (event) => {
        var name = event.key;
        var code = event.code;
        // Alert the key name and key code on keydown
        if(name === "F2")
            alert(`Key pressed ${name} \r\n Key code value: ${code}`);
        else
            return;

        }, false);
    }

    function setCanLoadScreen() {
        setIsLoading(false);
        setCanLoadMap(true);
        console.log(jsonParametrizacao);
    }
    
    function toggleUserblock(e) {
        e.preventDefault();
        if(visible === true)
            setVisible(false);
        if(visible === false)
            setVisible(true);
    }

    function handleChooseColor(colorStringJson) {
        var colorCard;
        switch (colorStringJson) {
            case "red":
            case "vermelho":
                colorCard = ".bg-danger"
                break;
            case "blue":
            case "azul":
                colorCard = ".bg-primary"
                break;
            case "green":
            case "verde":
                colorCard = ".bg-success"
                break;
            case "yellow":
            case "amarelo":
                colorCard = ".bg-warning"
                break;
        
            default:
                colorCard = ".bg-secondary"
                break;
        }
        setSimpleColorIndicator(colorCard);
    }

    return (
        <ContentWrapper>
            <div className="content-heading">
                <div style={{width: "100%"}}>
                    Indicadores &gt; Comum
                </div>
                <div style={{display: "flex", width: "100%", alignItems: "flex-end", justifyContent: "flex-end"}}>
                    <a className="nav-link" onClick={(e) => toggleUserblock(e)}>
                        <em className="fas fa-filter"></em>
                    </a>
                </div>
            </div>
            <Container fluid>
                    <div>
                        <FilterIndicatorBlock showFilterIndicator={visible}/>
                    </div>
                    <div>
                        <Loader isOn={isLoading}/>
                    </div>
                    {/* <Row>
                        <div className="col-xl-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="text-right text-muted">
                                    <em className="fa fa-gamepad fa-2x"></em>
                                </div>
                                <h3 className="mt-0">99.999</h3>
                                <p className="text-muted">Games played last month</p>
                                <div className="progress progress-xs mb-3">
                                    <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="70" style={{width: '60%'}}>
                                        <span className="sr-only">60% Complete</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </Row> */}
                    {/* <Row>
                        {canLoadMap &&
                        jsonParametrizacao.indicadores.filter(x => x.tipo == 1).map((indic, i) => (
                            <Col xl={ 3 } md={ 6 } sm={ 12 } key={i}>
                                <KeyValueCard
                                    title={indic.titulo}
                                    body={indic}
                                />
                            </Col>
                        ))}
                    </Row> */}
                    <Row>
                        {canLoadMap &&
                        jsonParametrizacao.indicadores.filter(x => x.tipo == 1).map((indic, i) => (
                            <Col xl={ 3 } md={ 6 } key={i} className="easeinAnimation"> 
                                <DoubleCard
                                    title={indic.titulo}
                                    value={indic.valor1}
                                    percent={indic.valor2 + " "}
                                />
                            </Col>
                        ))}
                    </Row>
                    {/* <Row>
                        {canLoadMap &&
                        jsonParametrizacao.indicadores.filter(x => x.tipo == 1).map((indic, i) => (
                            <Col xl={ 3 } md={ 6 } key={i} className="easeinAnimation">
                                <div className="card flex-row align-items-center align-items-stretch border-0">
                                    <div className="col-4 d-flex align-items-center bg-primary-dark justify-content-center rounded-left">
                                        <em className="icon-cloud-upload fa-3x"></em>
                                    </div>
                                    <div className="col-8 py-3 bg-primary rounded-right">
                                        <div className="h2 mt-0">{indic.cor}</div>
                                        <div className="text-uppercase">{indic.titulo}</div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row> */}
                    {/* <Row>
                        {canLoadMap &&
                        jsonParametrizacao.indicadores.filter(x => x.tipo == 2).map((indic, i) => (
                            <Col md={ 3 } sm={ 6 } key={i} className="easeinAnimation">
                                <Card className="text-center">
                                    <CardHeader>{indic.titulo}</CardHeader>
                                    <CardBody style={{height: "250px"}}>
                                        <ReactSpeedometer
                                        style={{zIndex: 3}}
                                        value={indic.valores[0]} 
                                        maxValue={10000000}
                                        segments={3}
                                        segmentColors={[
                                            "#bf616a",
                                            "#ebcb8b",
                                            "#a3be8c",
                                        ]}
                                        customSegmentStops={[
                                            0, 
                                            4500000,
                                            7500000, 
                                            10000000
                                        ]}
                                        />
                                        <div style={{position: "absolute", top: "250px", textAlign: "center"}}>
                                            <p>{indic.titulo}</p>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row> */}
            </Container>
        </ContentWrapper>
    );
}