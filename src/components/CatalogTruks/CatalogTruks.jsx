import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonLoadMore } from '../UI/ButtonLoadMore/ButtonLoadMore';
import { CatalogTruksContainer, CatalogTruksList } from './CatalogTruks.styled';
import CatalogTruksCard from '../CatalogTruksCard/CatalogTruksCard';
import LoaderPuff from '../UI/LoaderPuff/LoaderPuff';
import { fetchTrucks } from '../../redux/trucks/operations';
import { selectLoadingTrucks, selectTrucks } from '../../redux/trucks/selectors';

const CatalogTruks = () => {
  const truks = useSelector(selectTrucks);
  const loading = useSelector(selectLoadingTrucks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);

  return (
    <CatalogTruksContainer>
      <CatalogTruksList>
        {truks.map(e => (
          <CatalogTruksCard key={e.id} truk={e} />
        ))}
      </CatalogTruksList>

      <div>{loading ? <LoaderPuff /> : <ButtonLoadMore>Load more</ButtonLoadMore>}</div>
    </CatalogTruksContainer>
  );
};

export default CatalogTruks;
