import styled from 'styled-components';

export const CatalogTruksCardContainer = styled.div`
  display: flex;
  gap: 24px;

  padding: 24px;

  border: 1px solid ${p => p.theme.colors.grayLight};
  border-radius: 20px;
`;

export const CatalogTruksCardImg = styled.img`
  width: 292px;
  height: 320px;

  border-radius: 10px;

  object-fit: cover;
`;

export const CatalogTruksCardSpecification = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 524px;
  height: 320px;
`;

export const CatalogTruksCardTitleBox = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 8px;
`;

export const CatalogTruksCardTitle = styled.p`
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  text-align: left;

  color: ${p => p.theme.colors.main};
`;

export const CatalogTruksCardIconFavorites = styled.svg`
  display: block;
  width: 26px;
  height: 24px;
`;

export const CatalogTruksCardPriceBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CatalogTruksCardReviewsLocationContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 16px;
`;

export const CatalogTruksCardReviewsLocationBox = styled.div`
  display: flex;
  align-items: center;

  gap: 4px;
`;

export const CatalogTruksCardIconStar = styled.svg`
  display: block;
  width: 16px;
  height: 16px;
`;

export const CatalogTruksCardText = styled.p`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;

  color: ${p => p.theme.colors.main};
`;

export const CatalogTruksCardIconMap = styled.svg`
  display: block;
  width: 16px;
  height: 16px;
`;

export const CatalogTruksCardDescription = styled.p`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;

  color: ${p => p.theme.colors.text};
`;
