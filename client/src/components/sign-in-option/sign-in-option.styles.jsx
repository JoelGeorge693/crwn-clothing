import styled from "styled-components";

export const OuterBox = styled.div`
  box-shadow: -3px 3px 5px;
  z-index: 150;
  position: fixed;
  top: 0px;
  background-color: white;
  @media screen and (max-width: 800px) {
    width: 95%;
    left: 3px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  border: 30px solid white;
  opacity: 1;
  background-color: white;
  @media screen and (max-width: 800px) {
    border: 8px solid white;
    gap: 2px;
    width: 100%;
    right: 5px;
  }
`;
// .cross {
//   position: relative;
//   left: 410px;
//   top: 2px;
// }
