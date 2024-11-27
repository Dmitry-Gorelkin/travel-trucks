import { useNavigate } from 'react-router-dom';
import icon from '../../assets/icons.svg';
import TruckCategoriesList from '../TruckCategoriesList/TruckCategoriesList';
import { Button } from '../UI/Button/Button.styled';
import {
  CatalogTrucksCardContainer,
  CatalogTrucksCardImg,
  CatalogTrucksCardSpecification,
  CatalogTrucksCardTitleBox,
  CatalogTrucksCardTitle,
  CatalogTrucksCardPriceBox,
  CatalogTrucksCardReviewsLocationContainer,
  CatalogTrucksCardReviewsLocationBox,
  CatalogTrucksCardIconFavorites,
  CatalogTrucksCardIconStar,
  CatalogTrucksCardText,
  CatalogTrucksCardIconMap,
  CatalogTrucksCardDescription,
} from './CatalogTrucksCard.styled';

const CatalogTrucksCard = ({ truck }) => {
  const navigate = useNavigate();
  const {
    id,
    gallery = [],
    name = '',
    price = 0,
    rating,
    reviews = [],
    location = '',
    description = '',
  } = truck;

  return (
    <CatalogTrucksCardContainer>
      <CatalogTrucksCardImg src={gallery[0].thumb} alt={name} />
      <CatalogTrucksCardSpecification>
        <div>
          <CatalogTrucksCardTitleBox>
            <CatalogTrucksCardTitle>{name}</CatalogTrucksCardTitle>
            <CatalogTrucksCardPriceBox>
              <CatalogTrucksCardTitle>{`€${price}.00`}</CatalogTrucksCardTitle>
              <CatalogTrucksCardIconFavorites>
                <use href={`${icon}#heart`}></use>
              </CatalogTrucksCardIconFavorites>
            </CatalogTrucksCardPriceBox>
          </CatalogTrucksCardTitleBox>

          <CatalogTrucksCardReviewsLocationContainer>
            <CatalogTrucksCardReviewsLocationBox>
              <CatalogTrucksCardIconStar>
                <use href={`${icon}#star-gold`}></use>
              </CatalogTrucksCardIconStar>
              <CatalogTrucksCardText>
                {rating}({reviews.length} Reviews)
              </CatalogTrucksCardText>
            </CatalogTrucksCardReviewsLocationBox>

            <CatalogTrucksCardReviewsLocationBox>
              <CatalogTrucksCardIconMap>
                <use href={`${icon}#map`}></use>
              </CatalogTrucksCardIconMap>
              <CatalogTrucksCardText>{location}</CatalogTrucksCardText>
            </CatalogTrucksCardReviewsLocationBox>
          </CatalogTrucksCardReviewsLocationContainer>
        </div>

        <div>
          <CatalogTrucksCardDescription>
            {description.length >= 64 ? `${description.slice(0, 60)}...` : description}
          </CatalogTrucksCardDescription>
        </div>

        <TruckCategoriesList truck={truck} />

        <div>
          <Button onClick={() => navigate(`/catalog/${id}/features`)}>Show more</Button>
        </div>
      </CatalogTrucksCardSpecification>
    </CatalogTrucksCardContainer>
  );
};

export default CatalogTrucksCard;