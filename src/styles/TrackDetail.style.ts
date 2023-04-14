import styled from 'styled-components';

export const DetailPageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DetailPageContent = styled.div`
  position: relative;
  margin: auto;
  text-align: center;

  div {
    margin-top: 20px;
  }
`;

export const DetailPageIconContainer = styled.div`
  position: absolute;
  top: -140px;
  right: -140px;
`;
