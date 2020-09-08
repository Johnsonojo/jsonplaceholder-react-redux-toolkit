import styled from "styled-components";

export const NavContentWrapper = styled.div``;

export const NavLinksWrapper = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NavLink = styled.div`
  color: #007bff;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;

  &:hover {
    background-color: #007bff;
    color: #ffffff;
    cursor: pointer;
    padding: 5px;
    border-radius: 5px;
  }
`;

export const NavText = styled.h5`
  margin-left: 8px;
`;
