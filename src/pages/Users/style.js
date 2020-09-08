import styled from "styled-components";

export const UserContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const UserContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #c9c9ed;
  margin-bottom: 20px;
  margin-right: 20px;
  width: 350px;
  padding: 20px;
  cursor: pointer;
  border-radius: 5px;
  transition-property: all;
  transition-duration: 0.8s;
  transition-timing-function: ease;

  &:hover {
    color: #ffffff;
    background-color: #8c8ca7;
    width: 365px;
    height: 360px;
  }

  span {
    margin-bottom: 20px;
  }
`;

export const ImageWrapper = styled.div`
  img {
    border-radius: 50%;
  }
`;
