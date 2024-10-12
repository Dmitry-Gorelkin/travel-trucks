import { Container } from '../../components/UI/Conteiner/Conteiner.styled';
import { CatalogPageContainer } from './CatalogPage.styled';
import CatalogFilters from '../../components/CatalogFilters/CatalogFilters';
import CatalogTruks from '../../components/CatalogTruks/CatalogTruks';

const CatalogPage = () => {
  return (
    <Container>
      <CatalogPageContainer>
        <CatalogFilters />
        <CatalogTruks />
      </CatalogPageContainer>
    </Container>
  );
};

export default CatalogPage;
