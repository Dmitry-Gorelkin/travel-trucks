import { Container } from '../../components/UI/Conteiner/Conteiner.styled';
import { CatalogPageContainer } from './CatalogPage.styled';
import CatalogFilters from '../../components/CatalogFilters/CatalogFilters';
import CatalogTrucks from '../../components/CatalogTrucks/CatalogTrucks';

const CatalogPage = () => {
  return (
    <Container>
      <CatalogPageContainer>
        <CatalogFilters />
        <CatalogTrucks />
      </CatalogPageContainer>
    </Container>
  );
};

export default CatalogPage;
