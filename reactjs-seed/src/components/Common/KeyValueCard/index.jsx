import React, { useEffect, useState } from "react";
import { KeyValueCardWrapper } from "./styles/KeyValueCardWrapper";

export function KeyValueCard({ title, body }) {

  return (
    <KeyValueCardWrapper>
        <h1>{title}</h1>
        {body.propriedades.valores.map((obj, i) => (
            <div className="keyValueDiv" key={i}>
                {/* Key */}
                <p className="titleKeyValue">{obj}</p>
                <p className="ValueKeyValue">{obj}</p>
                {/* Value */}
                {/* <p>{obj.valores[0]}</p> */}
            </div>
        ))}
        <div className="keyValueDiv">
{/*             Key            Value              */}
            <p className="titleKeyValue">Teste: </p> <p className="ValueKeyValue">testado</p>
        </div>
    </KeyValueCardWrapper>
  );
}