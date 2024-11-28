import styled from 'styled-components';

export const CatalogTrucksCardContainer = styled.li`
  display: flex;
  gap: 24px;

  padding: 24px;

  border: 1px solid ${p => p.theme.colors.grayLight};
  border-radius: 20px;
`;

export const CatalogTrucksCardImg = styled.img`
  width: 292px;
  height: 320px;

  border-radius: 10px;

  object-fit: cover;
`;

export const CatalogTrucksCardSpecification = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 524px;
  height: 320px;
`;

export const CatalogTrucksCardTitleBox = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 8px;
`;

export const CatalogTrucksCardTitle = styled.p`
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  text-align: left;

  color: ${p => p.theme.colors.main};
`;

export const CatalogTrucksCardIconFavorites = styled.svg`
  display: block;
  width: 26px;
  height: 24px;

  cursor: pointer;

  fill: ${p => (p.like === 'true' ? p.theme.colors.button : p.theme.colors.main)};
`;

export const CatalogTrucksCardPriceBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CatalogTrucksCardReviewsLocationContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 16px;
`;

export const CatalogTrucksCardReviewsLocationBox = styled.div`
  display: flex;
  align-items: center;

  gap: 4px;
`;

export const CatalogTrucksCardIconStar = styled.svg`
  display: block;
  width: 16px;
  height: 16px;
`;

export const CatalogTrucksCardText = styled.p`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;

  color: ${p => p.theme.colors.main};
`;

export const CatalogTrucksCardIconMap = styled.svg`
  display: block;
  width: 16px;
  height: 16px;
`;

export const CatalogTrucksCardDescription = styled.p`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;

  color: ${p => p.theme.colors.text};
`;
