import styled from 'styled-components';

export const CatalogFiltersContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 40px;

  width: 360px;
`;

export const CatalogFiltersLocationTitle = styled.h2`
  margin-bottom: 8px;

  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;

  color: ${p => p.theme.colors.gray};
`;

export const CatalogFiltersLocationInputContainer = styled.div`
  position: relative;
`;

export const CatalogFiltersLocationInput = styled.input`
  display: block;

  padding: 18px 46px;

  outline: none;

  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;

  border: none;
  border-radius: 12px;

  color: ${p => p.theme.colors.main};
  background-color: ${p => p.theme.colors.inputs};

  &::placeholder {
    color: ${p => p.theme.colors.gray};
  }
`;

export const CatalogFiltersLocationIcon = styled.svg`
  display: block;

  position: absolute;

  width: 20px;
  height: 20px;

  left: 18px;
  top: 18px;

  fill: ${p => (p.isfilled === '' ? p.theme.colors.gray : p.theme.colors.main)};
`;

export const CatalogFiltersTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const CatalogFiltersTypeTitle = styled.h2`
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;

  color: ${p => p.theme.colors.text};
`;

export const CatalogFiltersTypeCaption = styled.p`
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

export const CatalogFiltersTypeList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  gap: 12px 8px;
`;

export const CatalogFiltersTypeItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 8px;

  width: 112px;
  height: 96px;

  border: 1px solid ${p => (p.active === 'true' ? p.theme.colors.button : p.theme.colors.grayLight)};
  border-radius: 12px;

  cursor: pointer;
`;

export const CatalogFiltersTypeIcon = styled.svg`
  display: block;

  width: 32px;
  height: 32px;
`;

export const CatalogFiltersTypeText = styled.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.005em;
  text-align: center;

  color: ${p => p.theme.colors.main};
`;
