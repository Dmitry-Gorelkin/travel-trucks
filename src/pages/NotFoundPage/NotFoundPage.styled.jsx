import styled from 'styled-components';

export const NotFoundPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: calc(100vh - 72px);
`;

export const NotFoundPageText = styled.p`
  font-family: Inter;
  font-size: 40px;
  font-weight: 600;
  line-height: 32px;
  text-align: left;

  color: ${p => p.theme.colors.text};
`;
