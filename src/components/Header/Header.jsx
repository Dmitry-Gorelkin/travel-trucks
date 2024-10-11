import Logo from '../Logo/Logo';
import { Container } from '../UI/Conteiner/Conteiner.styled';
import { HeaderBackgroundColor, HeaderContainer, HeaderNav, HeaderNavLink } from './Header.styled';

const Header = () => {
  return (
    <HeaderBackgroundColor>
      <Container>
        <HeaderContainer>
          <Logo />
          <HeaderNav>
            <HeaderNavLink to="/">Home</HeaderNavLink>
            <HeaderNavLink to="catalog">Catalog</HeaderNavLink>
          </HeaderNav>
        </HeaderContainer>
      </Container>
    </HeaderBackgroundColor>
  );
};

export default Header;
