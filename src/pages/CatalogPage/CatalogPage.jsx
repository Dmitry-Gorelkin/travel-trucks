import { useEffect } from 'react';
import { Container } from '../../components/UI/Conteiner/Conteiner.styled';
import { CatalogPageContainer } from './CatalogPage.styled';
import axios from 'axios';
import CatalogMenu from '../../components/CatalogMenu/CatalogMenu';
import CatalogListTruks from '../../components/CatalogListTruks/CatalogListTruks';

const CatalogPage = () => {
  useEffect(() => {
    const fetch = async () => {
      try {
        const respons = await axios('https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers');
        console.log(respons.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <Container>
      <CatalogPageContainer>
        <CatalogMenu />
        <CatalogListTruks />
      </CatalogPageContainer>
    </Container>
  );
};

export default CatalogPage;
