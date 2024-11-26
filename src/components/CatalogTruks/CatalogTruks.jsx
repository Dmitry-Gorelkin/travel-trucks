import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonLoadMore } from '../UI/ButtonLoadMore/ButtonLoadMore';
import { CatalogTruksContainer, CatalogTruksList } from './CatalogTruks.styled';
import CatalogTruksCard from '../CatalogTruksCard/CatalogTruksCard';
import LoaderPuff from '../UI/LoaderPuff/LoaderPuff';
import { fetchTrucks, fetchTrucksNextPage } from '../../redux/trucks/operations';
import { selectTrucksLoading, selectTrucks, selectTrucksTotal } from '../../redux/trucks/selectors';

const CatalogTruks = () => {
  const dispatch = useDispatch();
  const truks = useSelector(selectTrucks);
  const total = useSelector(selectTrucksTotal);
  const loading = useSelector(selectTrucksLoading);
  const [page, setPage] = useState(1);
  const [visibilityLoadMore, setVisibilityLoadMore] = useState(false);

  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);

  useEffect(() => {
    truks.length < total ? setVisibilityLoadMore(true) : setVisibilityLoadMore(false);
  }, [truks, total]);

  function nextPage() {
    if (truks.length < total) {
      dispatch(fetchTrucksNextPage(page + 1));
      setPage(p => p + 1);
    }
  }

  return (
    <CatalogTruksContainer>
      <CatalogTruksList>
        {truks.map(e => (
          <CatalogTruksCard key={e.id} truk={e} />
        ))}
      </CatalogTruksList>

      <div>
        {loading ? (
          <LoaderPuff />
        ) : visibilityLoadMore ? (
          <ButtonLoadMore onClick={nextPage}>Load more</ButtonLoadMore>
        ) : (
          <></>
        )}
      </div>
    </CatalogTruksContainer>
  );
};

export default CatalogTruks;
