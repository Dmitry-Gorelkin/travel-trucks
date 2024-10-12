import styled from 'styled-components';

export const CatalogLocationTitle = styled.h2`
  margin-bottom: 8px;

  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;

  color: ${p => p.theme.colors.gray};
`;

export const CatalogLocationInputContainer = styled.div`
  position: relative;
`;

export const CatalogLocationInput = styled.input`
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
export const CatalogLocationIcon = styled.svg`
  display: block;

  position: absolute;

  width: 20px;
  height: 20px;

  left: 18px;
  top: 18px;

  fill: ${p => (p.isFilled ? p.theme.colors.main : p.theme.colors.gray)};
`;
