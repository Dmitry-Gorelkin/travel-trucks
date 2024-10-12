import { useEffect, useState } from 'react';
import { ButtonLoadMore } from '../UI/ButtonLoadMore/ButtonLoadMore';
import { CatalogTruksContainer, CatalogTruksList } from './CatalogTruks.styled';
import axios from 'axios';
import CatalogTruksCard from '../CatalogTruksCard/CatalogTruksCard';

const CatalogTruks = () => {
  const [truks, setTruks] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const respons = await axios('https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers');
        console.log(respons.data);

        setTruks(respons.data.items);

        console.log(new Set(respons.data.items.map(e => e.form)));
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <CatalogTruksContainer>
      <CatalogTruksList>
        {truks.map(e => (
          <CatalogTruksCard key={e.id} truk={e} />
        ))}
      </CatalogTruksList>

      <div>
        <ButtonLoadMore>Load more</ButtonLoadMore>
      </div>
    </CatalogTruksContainer>
  );
};

export default CatalogTruks;
