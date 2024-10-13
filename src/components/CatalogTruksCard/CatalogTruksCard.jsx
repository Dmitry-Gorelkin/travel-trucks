import { useNavigate } from 'react-router-dom';
import icon from '../../assets/icons.svg';
import TrukCategoriesList from '../TrukCategoriesList/TrukCategoriesList';
import { Button } from '../UI/Button/Button.styled';
import {
  CatalogTruksCardContainer,
  CatalogTruksCardImg,
  CatalogTruksCardSpecification,
  CatalogTruksCardTitleBox,
  CatalogTruksCardTitle,
  CatalogTruksCardPriceBox,
  CatalogTruksCardReviewsLocationContainer,
  CatalogTruksCardReviewsLocationBox,
  CatalogTruksCardIconFavorites,
  CatalogTruksCardIconStar,
  CatalogTruksCardText,
  CatalogTruksCardIconMap,
  CatalogTruksCardDescription,
} from './CatalogTruksCard.styled';

const CatalogTruksCard = ({ truk }) => {
  const navigate = useNavigate();
  const {
    id,
    gallery = [],
    name,
    price,
    rating,
    reviews = [],
    location,
    description = '',
    transmission,
    engine,
    kitchen,
    AC,
    TV,
    radio,
    bathroom,
  } = truk;

  return (
    <CatalogTruksCardContainer>
      <CatalogTruksCardImg src={gallery[0].thumb} alt={name} />
      <CatalogTruksCardSpecification>
        <div>
          <CatalogTruksCardTitleBox>
            <CatalogTruksCardTitle>{name}</CatalogTruksCardTitle>
            <CatalogTruksCardPriceBox>
              <CatalogTruksCardTitle>{`€${price}.00`}</CatalogTruksCardTitle>
              <CatalogTruksCardIconFavorites>
                <use href={`${icon}#heart`}></use>
              </CatalogTruksCardIconFavorites>
            </CatalogTruksCardPriceBox>
          </CatalogTruksCardTitleBox>

          <CatalogTruksCardReviewsLocationContainer>
            <CatalogTruksCardReviewsLocationBox>
              <CatalogTruksCardIconStar>
                <use href={`${icon}#star-gold`}></use>
              </CatalogTruksCardIconStar>
              <CatalogTruksCardText>
                {rating}({reviews.length} Reviews)
              </CatalogTruksCardText>
            </CatalogTruksCardReviewsLocationBox>

            <CatalogTruksCardReviewsLocationBox>
              <CatalogTruksCardIconMap>
                <use href={`${icon}#map`}></use>
              </CatalogTruksCardIconMap>
              <CatalogTruksCardText>{location}</CatalogTruksCardText>
            </CatalogTruksCardReviewsLocationBox>
          </CatalogTruksCardReviewsLocationContainer>
        </div>

        <div>
          <CatalogTruksCardDescription>
            {description.length >= 64 ? `${description.slice(0, 60)}...` : description}
          </CatalogTruksCardDescription>
        </div>

        <TrukCategoriesList
          transmission={transmission}
          engine={engine}
          kitchen={kitchen}
          ac={AC}
          tv={TV}
          radio={radio}
          bathroom={bathroom}
        />

        <div>
          <Button onClick={() => navigate(`/catalog/${id}`)}>Show more</Button>
        </div>
      </CatalogTruksCardSpecification>
    </CatalogTruksCardContainer>
  );
};

export default CatalogTruksCard;
