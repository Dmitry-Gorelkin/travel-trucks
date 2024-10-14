import { useEffect, useState } from 'react';
import { ButtonLoadMore } from '../UI/ButtonLoadMore/ButtonLoadMore';
import { CatalogTruksContainer, CatalogTruksList } from './CatalogTruks.styled';
import axios from 'axios';
import CatalogTruksCard from '../CatalogTruksCard/CatalogTruksCard';
import LoaderPuff from '../UI/LoaderPuff/LoaderPuff';

const CatalogTruks = () => {
  const [truks, setTruks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const respons = await axios('https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers');

        setTruks(respons.data.items);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
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

      <div>{loading ? <LoaderPuff /> : <ButtonLoadMore>Load more</ButtonLoadMore>}</div>
    </CatalogTruksContainer>
  );
};

export default CatalogTruks;
