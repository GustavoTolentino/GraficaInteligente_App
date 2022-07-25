import styled, { css } from "styled-components";

const Untagged = css`
  .tagBody{
    display: none;
  }
`;

const Tagged = css`
  .tagBody {
    text-align: end;
    background-color: blue;
    border-radius: 4px;
    color: #ffffff;
    padding: 0 6px; 
    margin-bottom: 0;
  }
`;

export const DoubleCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: solid 1px #c4c4c4;
  margin-bottom: 20px;
  background-color: #ffffff;
  
  .doubleCardTitleArea {
    display: flex;
    justify-content: space-between;
    border-bottom: solid 1px #c4c4c4;
    padding: 20px;
  }

  .doubleCardTitleArea h1 {
    font-weight: normal;
    font-size: 18px;
    margin-bottom: 0;
  }

  .doubleCardInfoArea {
    padding: 20px;
  }

  .divValueArea {
    font-size: 24px;
    padding-bottom: 0;
  }

  .divPercentArea {
    text-align: end;
    color: blue;
  }

  ${({ tagged }) => {
    if (tagged) return Tagged;
    return Untagged;
  }};
`;