import React from "react";
import { DoubleCardWrapper } from "./styles/DoubleCardWrapper";

export function DoubleCard({ title, value, percent, tag, tagged }) {
  return (
    <DoubleCardWrapper tagged={tagged}>
      <div className="doubleCardTitleArea">
        <h1>{title}</h1>
        <p className="tagBody">{tag}</p>
      </div>
      <div className="doubleCardInfoArea">
        <div className="divValueArea">
          {value}
        </div>
        <div className="divPercentArea">
          {percent}
          <i className="fas fa-bolt"/>
        </div>
      </div>
    </DoubleCardWrapper>
  );
}