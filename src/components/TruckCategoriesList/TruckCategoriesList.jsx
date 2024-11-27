import icon from '../../assets/icons.svg';
import {
  TruckCategoriesListContainer,
  TruckCategoriesListIcon,
  TruckCategoriesListItem,
  TruckCategoriesListText,
} from './TruckCategoriesList.styled';

const TruckCategoriesList = ({ truck }) => {
  const { transmission, engine, kitchen, ac, tv, radio, bathroom } = truck;

  return (
    <>
      <TruckCategoriesListContainer>
        {transmission === 'automatic' && (
          <TruckCategoriesListItem>
            <TruckCategoriesListIcon>
              <use href={`${icon}#diagram`}></use>
            </TruckCategoriesListIcon>
            <TruckCategoriesListText>Automatic</TruckCategoriesListText>
          </TruckCategoriesListItem>
        )}
        <TruckCategoriesListItem>
          <TruckCategoriesListIcon>
            <use href={`${icon}#engine`}></use>
          </TruckCategoriesListIcon>
          <TruckCategoriesListText>{engine}</TruckCategoriesListText>
        </TruckCategoriesListItem>
        {kitchen && (
          <TruckCategoriesListItem>
            <TruckCategoriesListIcon>
              <use href={`${icon}#cup-hot`}></use>
            </TruckCategoriesListIcon>
            <TruckCategoriesListText>Kitchen</TruckCategoriesListText>
          </TruckCategoriesListItem>
        )}
        {ac && (
          <TruckCategoriesListItem>
            <TruckCategoriesListIcon>
              <use href={`${icon}#wind`}></use>
            </TruckCategoriesListIcon>
            <TruckCategoriesListText>AC</TruckCategoriesListText>
          </TruckCategoriesListItem>
        )}
        {tv && (
          <TruckCategoriesListItem>
            <TruckCategoriesListIcon>
              <use href={`${icon}#tv`}></use>
            </TruckCategoriesListIcon>
            <TruckCategoriesListText>TV</TruckCategoriesListText>
          </TruckCategoriesListItem>
        )}
        {radio && (
          <TruckCategoriesListItem>
            <TruckCategoriesListIcon>
              <use href={`${icon}#radio`}></use>
            </TruckCategoriesListIcon>
            <TruckCategoriesListText>Radio</TruckCategoriesListText>
          </TruckCategoriesListItem>
        )}
        {bathroom && (
          <TruckCategoriesListItem>
            <TruckCategoriesListIcon>
              <use href={`${icon}#bi_droplet`}></use>
            </TruckCategoriesListIcon>
            <TruckCategoriesListText>Bathroom</TruckCategoriesListText>
          </TruckCategoriesListItem>
        )}
      </TruckCategoriesListContainer>
    </>
  );
};

export default TruckCategoriesList;
