import styled, { css } from "styled-components";

export const KeyValueCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: #ffffff;
  padding: 24px;
  margin-bottom: 20px;

  h1{
      font-size: 20px;
      margin-bottom: 24px;
  }
  .keyValueDiv{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }
  
  .keyValueDiv p{
      margin-bottom: 12px;
  }
  .titleKeyValue {
    color: #939393;
    font-size: 16px;
  }
  .ValueKeyValue{
      color: #000000;
      font-size: 18px;
  }
`;