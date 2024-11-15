import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 166px;
  height: 56px;

  padding: 0;

  /* display: block; */ //старое решение
  /* padding: 16px 60px; */ //старое решение

  border: none;
  border-radius: 200px;

  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.005em;
  text-align: left;

  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.button};

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.buttonHover};
  }
`;
