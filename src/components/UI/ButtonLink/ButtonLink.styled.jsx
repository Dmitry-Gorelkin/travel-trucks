import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 173px;
  height: 56px;

  padding: 0;

  /* padding: 16px 60px; */ //старое решение

  border: none;
  border-radius: 200px;

  text-decoration: none;

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
