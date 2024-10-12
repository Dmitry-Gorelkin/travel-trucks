import icon from '../../assets/icons.svg';
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
  CatalogTruksCardCategoriesList,
  CatalogTruksCardCategoriesItem,
  CatalogTruksCardCategoriesIcon,
  CatalogTruksCardCategoriesText,
} from './CatalogTruksCard.styled';

const CatalogTruksCard = ({ truk }) => {
  const {
    gallery,
    name,
    price,
    rating,
    reviews,
    location,
    description,
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

        <CatalogTruksCardCategoriesList>
          {transmission === 'automatic' && (
            <CatalogTruksCardCategoriesItem>
              <CatalogTruksCardCategoriesIcon>
                <use href={`${icon}#diagram`}></use>
              </CatalogTruksCardCategoriesIcon>
              <CatalogTruksCardCategoriesText>Automatic</CatalogTruksCardCategoriesText>
            </CatalogTruksCardCategoriesItem>
          )}
          <CatalogTruksCardCategoriesItem>
            <CatalogTruksCardCategoriesIcon>
              <use href={`${icon}#engine`}></use>
            </CatalogTruksCardCategoriesIcon>
            <CatalogTruksCardCategoriesText>{engine}</CatalogTruksCardCategoriesText>
          </CatalogTruksCardCategoriesItem>
          {kitchen && (
            <CatalogTruksCardCategoriesItem>
              <CatalogTruksCardCategoriesIcon>
                <use href={`${icon}#cup-hot`}></use>
              </CatalogTruksCardCategoriesIcon>
              <CatalogTruksCardCategoriesText>Kitchen</CatalogTruksCardCategoriesText>
            </CatalogTruksCardCategoriesItem>
          )}
          {AC && (
            <CatalogTruksCardCategoriesItem>
              <CatalogTruksCardCategoriesIcon>
                <use href={`${icon}#wind`}></use>
              </CatalogTruksCardCategoriesIcon>
              <CatalogTruksCardCategoriesText>AC</CatalogTruksCardCategoriesText>
            </CatalogTruksCardCategoriesItem>
          )}
          {TV && (
            <CatalogTruksCardCategoriesItem>
              <CatalogTruksCardCategoriesIcon>
                <use href={`${icon}#tv`}></use>
              </CatalogTruksCardCategoriesIcon>
              <CatalogTruksCardCategoriesText>TV</CatalogTruksCardCategoriesText>
            </CatalogTruksCardCategoriesItem>
          )}
          {radio && (
            <CatalogTruksCardCategoriesItem>
              <CatalogTruksCardCategoriesIcon>
                <use href={`${icon}#radio`}></use>
              </CatalogTruksCardCategoriesIcon>
              <CatalogTruksCardCategoriesText>Radio</CatalogTruksCardCategoriesText>
            </CatalogTruksCardCategoriesItem>
          )}
          {bathroom && (
            <CatalogTruksCardCategoriesItem>
              <CatalogTruksCardCategoriesIcon>
                <use href={`${icon}#bi_droplet`}></use>
              </CatalogTruksCardCategoriesIcon>
              <CatalogTruksCardCategoriesText>Bathroom</CatalogTruksCardCategoriesText>
            </CatalogTruksCardCategoriesItem>
          )}
        </CatalogTruksCardCategoriesList>

        <div>
          <Button>Show more</Button>
        </div>
      </CatalogTruksCardSpecification>
    </CatalogTruksCardContainer>
  );
};

export default CatalogTruksCard;
