import styled from 'styled-components';

export const Button = styled.button`
  padding: 16px 60px;

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

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.buttonHover};
  }
`;
