import React from "react";
import { LoaderWrapper } from "./styles/LoaderWrapper";
import 'loaders.css/loaders.css';
import 'spinkit/css/spinkit.css';

export function Loader({ isOn }) {
  return (
    <LoaderWrapper isOn={isOn}>
        <div className="card-body loader-demo loader-demo-sk d-flex align-items-center justify-content-center">
            <div className="sk-fading-circle">
                <div className="sk-circle1 sk-circle"/>
                <div className="sk-circle2 sk-circle"/>
                <div className="sk-circle3 sk-circle"/>
                <div className="sk-circle4 sk-circle"/>
                <div className="sk-circle5 sk-circle"/>
                <div className="sk-circle6 sk-circle"/>
                <div className="sk-circle7 sk-circle"/>
                <div className="sk-circle8 sk-circle"/>
                <div className="sk-circle9 sk-circle"/>
                <div className="sk-circle10 sk-circle"/>
                <div className="sk-circle11 sk-circle"/>
                <div className="sk-circle12 sk-circle"/>
            </div>
        </div>
    </LoaderWrapper>
  );
}