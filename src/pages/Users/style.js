import styled from "styled-components";

export const UserContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  margin-top: 20px;
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
  span {
    margin-bottom: 20px;
  }
`;
