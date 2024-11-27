import icon from '../../assets/icons.svg';
import {
  TruckCategoriesListContainer,
  TruckCategoriesListIcon,
  TruckCategoriesListItem,
  TruckCategoriesListText,
} from './TruckCategoriesList.styled';

const TruckCategoriesList = ({ truck }) => {
  const {
    transmission,
    engine,
    kitchen,
    ac,
    tv,
    radio,
    bathroom,
    refrigerator,
    microwave,
    gas,
    water,
  } = truck;

  return (
    <>
      <TruckCategoriesListContainer>
        {transmission === 'automatic' && (
          <TruckCategoriesListItem>
            <TruckCategoriesListIcon>
              <use href={`${icon}#automatic`}></use>
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
              <use href={`${icon}#kitchen`}></use>
            </TruckCategoriesListIcon>
            <TruckCategoriesListText>Kitchen</TruckCategoriesListText>
          </TruckCategoriesListItem>
        )}
        {ac && (
          <TruckCategoriesListItem>
            <TruckCategoriesListIcon>
              <use href={`${icon}#ac`}></use>
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
              <use href={`${icon}#bathroom`}></use>
            </TruckCategoriesListIcon>
            <TruckCategoriesListText>Bathroom</TruckCategoriesListText>
          </TruckCategoriesListItem>
        )}

        {refrigerator && (
          <TruckCategoriesListItem>
            <TruckCategoriesListIcon>
              <use href={`${icon}#refrigerator`}></use>
            </TruckCategoriesListIcon>
            <TruckCategoriesListText>Refrigerator</TruckCategoriesListText>
          </TruckCategoriesListItem>
        )}

        {microwave && (
          <TruckCategoriesListItem>
            <TruckCategoriesListIcon>
              <use href={`${icon}#microwave`}></use>
            </TruckCategoriesListIcon>
            <TruckCategoriesListText>Microwave</TruckCategoriesListText>
          </TruckCategoriesListItem>
        )}
        {gas && (
          <TruckCategoriesListItem>
            <TruckCategoriesListIcon>
              <use href={`${icon}#gas`}></use>
            </TruckCategoriesListIcon>
            <TruckCategoriesListText>Gas</TruckCategoriesListText>
          </TruckCategoriesListItem>
        )}
        {water && (
          <TruckCategoriesListItem>
            <TruckCategoriesListIcon>
              <use href={`${icon}#water`}></use>
            </TruckCategoriesListIcon>
            <TruckCategoriesListText>Water</TruckCategoriesListText>
          </TruckCategoriesListItem>
        )}
      </TruckCategoriesListContainer>
    </>
  );
};

export default TruckCategoriesList;
