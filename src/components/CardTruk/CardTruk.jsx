import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import icon from '../../assets/icons.svg';
import LoaderPuff from '../UI/LoaderPuff/LoaderPuff';
import CardTrukReviews from '../CardTrukReviews/CardTrukReviews';
import CardTrukFeatures from '../CardTrukFeatures/CardTrukFeatures';
import CardTrukBooking from '../CardTrukBooking/CardTrukBooking';

const CardTruk = () => {
  const { id } = useParams();

  const [truk, setTruk] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const respons = await axios(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`);
        console.log(respons.data);

        setTruk(respons.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [id]);

  return (
    <>
      <div>
        <h2>{truk.name}</h2>

        <div>
          <svg>
            <use href={`${icon}#star-gold`}></use>
          </svg>
          <p>
            {truk.rating}
            Reviews
          </p>
        </div>

        <div>
          <svg>
            <use href={`${icon}#map`}></use>
          </svg>
          <p>{truk.location}</p>
        </div>

        <div>
          <p>{`€${truk.price}.00`}</p>
        </div>
      </div>

      <div>
        <ul>
          {truk.gallery
            ? truk.gallery.map(e => (
                <li key={e.thumb}>
                  <img src={e.thumb} alt="photo of a truck" />
                </li>
              ))
            : null}
        </ul>
      </div>

      <div>
        <p>{truk.description}</p>
      </div>

      <ul>
        <li>Features</li>
        <li>Reviews</li>
      </ul>

      <div>
        <CardTrukReviews />
        <CardTrukFeatures truk={truk} />

        <CardTrukBooking />
      </div>
    </>
  );
};

export default CardTruk;
