import styled, { css } from "styled-components";

const IsOff = css`
  display: none;
`;

const IsOn = css`
  display: block;
`;

export const LoaderWrapper = styled.div`
  position: absolute;
  right: 50%;
  top: 100%;

  ${({ isOn }) => {
    if (isOn) return IsOn;
    return IsOff;
  }};
`;