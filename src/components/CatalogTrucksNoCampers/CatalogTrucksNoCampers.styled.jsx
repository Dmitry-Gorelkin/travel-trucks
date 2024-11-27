import styled from 'styled-components';

export const CatalogTrucksNoCampersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CatalogTrucksNoCampersText = styled.p`
  font-family: Inter;
  font-size: 40px;
  font-weight: 600;
  line-height: 32px;
  text-align: left;

  color: ${p => p.theme.colors.text};
`;
