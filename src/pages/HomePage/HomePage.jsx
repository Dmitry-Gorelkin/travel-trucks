import { Button } from '../../components/UI/Button/Button.styled';
import { Container } from '../../components/UI/Conteiner/Conteiner.styled';
import {
  HomePageBackgroundImage,
  HomePageContainer,
  HomePageText,
  HomePageTitle,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <HomePageBackgroundImage>
      <Container>
        <HomePageContainer>
          <HomePageTitle>Campers of your dreams</HomePageTitle>
          <HomePageText>You can find everything you want in our catalog</HomePageText>
          <Button>View Now</Button>
        </HomePageContainer>
      </Container>
    </HomePageBackgroundImage>
  );
};

export default HomePage;
