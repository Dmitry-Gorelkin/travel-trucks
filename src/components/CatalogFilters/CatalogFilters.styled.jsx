import styled from 'styled-components';

export const CatalogFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const CatalogFilterTitle = styled.h2`
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;

  color: ${p => p.theme.colors.text};
`;

export const CatalogFilterCaption = styled.p`
  margin-bottom: 24px;
  padding-bottom: 24px;

  border-bottom: 1px solid ${p => p.theme.colors.grayLight};

  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;

  color: ${p => p.theme.colors.main};
`;

export const CatalogFilterList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  gap: 12px 8px;
`;

export const CatalogFilterItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 8px;

  width: 112px;
  height: 96px;

  border: 1px solid ${p => (p.active ? p.theme.colors.button : p.theme.colors.grayLight)};
  border-radius: 12px;

  cursor: pointer;
`;

export const CatalogFilterIcon = styled.svg`
  display: block;

  width: 32px;
  height: 32px;
`;

export const CatalogFilterText = styled.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.005em;
  text-align: center;

  color: ${p => p.theme.colors.main};
`;
