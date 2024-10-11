import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderBackgroundColor = styled.div`
  background-color: ${p => p.theme.colors.inputs};
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  padding-top: 24px;
  padding-bottom: 24px;
`;

export const HeaderNav = styled.nav`
  display: flex;

  gap: 32px;
`;

export const HeaderNavLink = styled(NavLink)`
  text-decoration: none;

  cursor: pointer;

  color: ${p => p.theme.colors.main};

  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;

  &.active {
    color: ${p => p.theme.colors.buttonHover};
  }
`;
