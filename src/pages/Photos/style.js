import styled from "styled-components";

export const PhotosRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
`;

export const PhotosColumn = styled.div`
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;

  img {
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
  }

  @media screen and (max-width: 800px) {
    -ms-flex: 50%;
    flex: 50%;
    max-width: 50%;
  }

  @media screen and (max-width: 600px) {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 100%;
  }
`;
