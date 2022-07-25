import styled, { css } from 'styled-components';

const LoginInputMobile = css`
    background-color: #F0F0F0;
    display: flex;
    align-items: center;
    gap: 16px;  
    border: solid 2px #111111;
    border-radius: 5px;
    padding: 0 18px;
    font-size: 24px;
    margin-bottom: 12px;

    svg {
      color: #c1c1c1;
    }
    input {
        border: none;
        outline: none;
        color: #ffffff;
        background-color: transparent;
        padding: 18px 0;
        width: 100%;
    }
    &:focus-within {
        border: solid 2px #FB5700;
        svg {
        color: #FB5700;
        }
    }
`;

const DefaultInput = css`
background-color: yellow;
    border-style: solid;
    border-bottom-width: 3px;
    border-bottom-color: #C10000;
    border-top: none;
    border-right: none;
    border-left: none;
    color: #ABABAB;
    
    input{
        width: 100%;
        font-size: 18px;
        padding-bottom: 5px;
        margin-top: 40px;
        outline: 0;
        box-shadow: 0 0 0 0;
    }
    
    input:focus-within{
        border-bottom-color: #19133A;
    }
    `;

export const InputWrapper = styled.div`
    background-color: #092492;

    ${({ mobilelogin }) => {
    if (mobilelogin) return LoginInputMobile;
    return DefaultInput;
  }};
`;