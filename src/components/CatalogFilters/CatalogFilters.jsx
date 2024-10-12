import CatalogFiltersType from '../CatalogFiltersType/CatalogFiltersType';
import CatalogFiltersLocation from '../CatalogFiltersLocation/CatalogFiltersLocation';
import { Button } from '../UI/Button/Button.styled';
import { CatalogFiltersContainer } from './CatalogFilters.styled';

const CatalogFilters = () => {
  return (
    <CatalogFiltersContainer>
      <CatalogFiltersLocation />
      <CatalogFiltersType />
      <div>
        <Button>Search</Button>
      </div>
    </CatalogFiltersContainer>
  );
};

export default CatalogFilters;
