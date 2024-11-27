import CardTruck from '../../components/CardTruck/CardTruck';
import { Container } from '../../components/UI/Conteiner/Conteiner.styled';
import { CardTruckPageContainer } from './CardTruckPage.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTruckCard } from '../../redux/trucks/operations';
import { selectTruckCard, selectTrucksLoading } from '../../redux/trucks/selectors';

const CardTruckPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const truck = useSelector(selectTruckCard);
  const loading = useSelector(selectTrucksLoading);

  useEffect(() => {
    dispatch(fetchTruckCard(id));
  }, [dispatch, id]);

  return (
    <Container>
      <CardTruckPageContainer>
        <CardTruck truck={truck} loading={loading} />
      </CardTruckPageContainer>
    </Container>
  );
};

export default CardTruckPage;
