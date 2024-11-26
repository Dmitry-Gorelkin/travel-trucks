import CardTruk from '../../components/CardTruk/CardTruk';
import { Container } from '../../components/UI/Conteiner/Conteiner.styled';
import { CardTrukPageContainer } from './CardTrukPage.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTruckCard } from '../../redux/trucks/operations';
import { selectTruckCard, selectTrucksLoading } from '../../redux/trucks/selectors';

const CardTrukPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const truk = useSelector(selectTruckCard);
  const loading = useSelector(selectTrucksLoading);

  useEffect(() => {
    dispatch(fetchTruckCard(id));
  }, [dispatch, id]);

  return (
    <Container>
      <CardTrukPageContainer>
        <CardTruk truk={truk} loading={loading} />
      </CardTrukPageContainer>
    </Container>
  );
};

export default CardTrukPage;
