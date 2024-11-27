import CardTruck from '../../components/CardTruck/CardTruck';
import { Container } from '../../components/UI/Conteiner/Conteiner.styled';
import { CardTruckPageContainer } from './CardTruckPage.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTruckCard } from '../../redux/trucks/operations';
import {
  selectTruckCard,
  selectTrucksLoading,
  selectTrucksError,
} from '../../redux/trucks/selectors';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import toast from 'react-hot-toast';

const CardTruckPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const truck = useSelector(selectTruckCard);
  const loading = useSelector(selectTrucksLoading);
  const error = useSelector(selectTrucksError);

  useEffect(() => {
    dispatch(fetchTruckCard(id));
  }, [dispatch, id]);

  if (error) {
    toast.error(error);

    return <NotFoundPage />;
  }

  return (
    <Container>
      <CardTruckPageContainer>
        <CardTruck truck={truck} loading={loading} />
      </CardTruckPageContainer>
    </Container>
  );
};

export default CardTruckPage;
