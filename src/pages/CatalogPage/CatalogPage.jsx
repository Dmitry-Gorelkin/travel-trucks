import { Container } from '../../components/UI/Conteiner/Conteiner.styled';
import { CatalogPageContainer } from './CatalogPage.styled';
import CatalogFilters from '../../components/CatalogFilters/CatalogFilters';
import CatalogTrucks from '../../components/CatalogTrucks/CatalogTrucks';
import { useEffect, useState } from 'react';
import { selectTrucksError } from '../../redux/trucks/selectors';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { PAGE_DEFAULT } from '../../constants/trucks';

const CatalogPage = () => {
  const [page, setPage] = useState(PAGE_DEFAULT);
  const error = useSelector(selectTrucksError);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <Container>
      <CatalogPageContainer>
        <CatalogFilters onPageStart={setPage} />
        <CatalogTrucks page={page} onPageNext={setPage} error={error} />
      </CatalogPageContainer>
    </Container>
  );
};

export default CatalogPage;
