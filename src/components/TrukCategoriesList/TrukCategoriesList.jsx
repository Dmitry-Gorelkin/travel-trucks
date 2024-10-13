import icon from '../../assets/icons.svg';
import {
  TrukCategoriesListContainer,
  TrukCategoriesListIcon,
  TrukCategoriesListItem,
  TrukCategoriesListText,
} from './TrukCategoriesList.styled';

const TrukCategoriesList = ({ transmission, engine, kitchen, ac, tv, radio, bathroom }) => {
  return (
    <>
      <TrukCategoriesListContainer>
        {transmission === 'automatic' && (
          <TrukCategoriesListItem>
            <TrukCategoriesListIcon>
              <use href={`${icon}#diagram`}></use>
            </TrukCategoriesListIcon>
            <TrukCategoriesListText>Automatic</TrukCategoriesListText>
          </TrukCategoriesListItem>
        )}
        <TrukCategoriesListItem>
          <TrukCategoriesListIcon>
            <use href={`${icon}#engine`}></use>
          </TrukCategoriesListIcon>
          <TrukCategoriesListText>{engine}</TrukCategoriesListText>
        </TrukCategoriesListItem>
        {kitchen && (
          <TrukCategoriesListItem>
            <TrukCategoriesListIcon>
              <use href={`${icon}#cup-hot`}></use>
            </TrukCategoriesListIcon>
            <TrukCategoriesListText>Kitchen</TrukCategoriesListText>
          </TrukCategoriesListItem>
        )}
        {ac && (
          <TrukCategoriesListItem>
            <TrukCategoriesListIcon>
              <use href={`${icon}#wind`}></use>
            </TrukCategoriesListIcon>
            <TrukCategoriesListText>AC</TrukCategoriesListText>
          </TrukCategoriesListItem>
        )}
        {tv && (
          <TrukCategoriesListItem>
            <TrukCategoriesListIcon>
              <use href={`${icon}#tv`}></use>
            </TrukCategoriesListIcon>
            <TrukCategoriesListText>TV</TrukCategoriesListText>
          </TrukCategoriesListItem>
        )}
        {radio && (
          <TrukCategoriesListItem>
            <TrukCategoriesListIcon>
              <use href={`${icon}#radio`}></use>
            </TrukCategoriesListIcon>
            <TrukCategoriesListText>Radio</TrukCategoriesListText>
          </TrukCategoriesListItem>
        )}
        {bathroom && (
          <TrukCategoriesListItem>
            <TrukCategoriesListIcon>
              <use href={`${icon}#bi_droplet`}></use>
            </TrukCategoriesListIcon>
            <TrukCategoriesListText>Bathroom</TrukCategoriesListText>
          </TrukCategoriesListItem>
        )}
      </TrukCategoriesListContainer>
    </>
  );
};

export default TrukCategoriesList;
