import CatalogFilters from '../CatalogFilters/CatalogFilters';
import CatalogLocation from '../CatalogLocation/CatalogLocation';
import { Button } from '../UI/Button/Button.styled';
import { CatalogMenuContainer } from './CatalogMenu.styled';

const CatalogMenu = () => {
  return (
    <CatalogMenuContainer>
      <CatalogLocation />
      <CatalogFilters />
      <Button>Search</Button>
    </CatalogMenuContainer>
  );
};

export default CatalogMenu;
