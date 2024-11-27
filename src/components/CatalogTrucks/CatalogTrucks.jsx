import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonLoadMore } from '../UI/ButtonLoadMore/ButtonLoadMore';
import { CatalogTrucksContainer, CatalogTrucksList } from './CatalogTrucks.styled';
import CatalogTrucksCard from '../CatalogTrucksCard/CatalogTrucksCard';
import LoaderPuff from '../UI/LoaderPuff/LoaderPuff';
import { fetchTrucks, fetchTrucksNextPage } from '../../redux/trucks/operations';
import { selectTrucksLoading, selectTrucks, selectTrucksTotal } from '../../redux/trucks/selectors';

const CatalogTrucks = () => {
  const dispatch = useDispatch();
  const trucks = useSelector(selectTrucks);
  const total = useSelector(selectTrucksTotal);
  const loading = useSelector(selectTrucksLoading);
  const [page, setPage] = useState(1);
  const [visibilityLoadMore, setVisibilityLoadMore] = useState(false);

  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);

  useEffect(() => {
    trucks.length < total ? setVisibilityLoadMore(true) : setVisibilityLoadMore(false);
  }, [trucks, total]);

  function nextPage() {
    if (trucks.length < total) {
      dispatch(fetchTrucksNextPage(page + 1));
      setPage(p => p + 1);
    }
  }

  return (
    <CatalogTrucksContainer>
      <CatalogTrucksList>
        {trucks.map(e => (
          <CatalogTrucksCard key={e.id} truck={e} />
        ))}
      </CatalogTrucksList>

      <div>
        {loading ? (
          <LoaderPuff />
        ) : visibilityLoadMore ? (
          <ButtonLoadMore onClick={nextPage}>Load more</ButtonLoadMore>
        ) : (
          <></>
        )}
      </div>
    </CatalogTrucksContainer>
  );
};

export default CatalogTrucks;
