import { Container } from '../UI/Conteiner/Conteiner.styled';
import { HeaderBackgroundColor, HeaderContainer, HeaderNav, HeaderNavLink } from './Header.styled';

const Header = () => {
  return (
    <>
      <HeaderBackgroundColor>
        <Container>
          <HeaderContainer>
            {/* <div>LOGO</div> */}
            <HeaderNav>
              <HeaderNavLink to="/">Home</HeaderNavLink>
              <HeaderNavLink to="catalog">Catalog</HeaderNavLink>
            </HeaderNav>
          </HeaderContainer>
        </Container>
      </HeaderBackgroundColor>
    </>
  );
};

export default Header;
