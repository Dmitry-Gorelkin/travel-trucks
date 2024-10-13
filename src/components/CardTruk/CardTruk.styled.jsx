import styled from 'styled-components';

export const CardTrukContainer = styled.div``;

export const CardTrukTitleContainer = styled.div`
  margin-bottom: 28px;
`;

export const CardTrukTitle = styled.h2`
  margin-bottom: 8px;

  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  text-align: left;

  color: ${p => p.theme.colors.main};
`;

export const CardTrukReviewsLocationContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 16px;

  margin-bottom: 16px;
`;

export const CardTrukReviewsLocationBox = styled.div`
  display: flex;
  align-items: center;

  gap: 4px;
`;

export const CardTrukReviewsLocationIcon = styled.svg`
  display: block;
  width: 16px;
  height: 16px;
`;

export const CardTrukReviewsLocationText = styled.p`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;

  color: ${p => p.theme.colors.main};
`;

export const CardTrukPrice = styled.p`
  display: block;

  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  text-align: left;

  color: ${p => p.theme.colors.main};
`;

export const CardTrukImageList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  gap: 48px;

  margin-bottom: 28px;
`;

export const CardTrukImage = styled.img`
  display: block;

  width: 292px;
  height: 312px;

  border-radius: 10px;

  object-fit: cover;
`;

export const CardTrukDescriptionText = styled.p`
  display: block;

  margin-bottom: 60px;

  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;

  color: ${p => p.theme.colors.text};
`;

export const CardTrukFeaturesReviewsList = styled.ul`
  display: flex;

  gap: 40px;

  padding-bottom: 24px;
  margin-bottom: 44px;

  border-bottom: 1px solid ${p => p.theme.colors.grayLight};
`;

export const CardTrukFeaturesReviewsItem = styled.li`
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;

  color: ${p => p.theme.colors.main};

  cursor: pointer;

  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -25.5px;
    width: 100%;
    height: 3px;
    background-color: ${p => p.theme.colors.button};
    transform: scaleX(${p => (p.isactive === 'true' ? 1 : 0)});
    transform-origin: left;
    transition: transform 0.3s ease;
  }
`;

export const CardTrukFeaturesReviewsBookingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 40px;
`;
