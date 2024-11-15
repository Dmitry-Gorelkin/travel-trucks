import styled from 'styled-components';

export const ButtonLoadMore = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 145px;
  height: 56px;

  padding: 0;

  /* padding: 16px 32px; */ //старое решение

  border: 1px solid ${p => p.theme.colors.grayLight};
  border-radius: 200px;

  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.005em;
  text-align: left;

  color: ${p => p.theme.colors.main};
  background-color: transparent;

  cursor: pointer;

  &:hover,
  &:focus {
    border-color: ${p => p.theme.colors.buttonHover};
  }
`;
