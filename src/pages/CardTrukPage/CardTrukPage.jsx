import CardTruk from '../../components/CardTruk/CardTruk';
import { Container } from '../../components/UI/Conteiner/Conteiner.styled';
import { CardTrukPageContainer } from './CardTrukPage.styled';

const CardTrukPage = () => {
  return (
    <Container>
      <CardTrukPageContainer>
        <CardTruk />
      </CardTrukPageContainer>
    </Container>
  );
};

export default CardTrukPage;
