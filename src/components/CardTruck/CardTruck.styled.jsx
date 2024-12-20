import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const CardTruckContainer = styled.div``;

export const CardTruckTitleContainer = styled.div`
  margin-bottom: 28px;
`;

export const CardTruckTitle = styled.h2`
  margin-bottom: 8px;

  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  text-align: left;

  color: ${p => p.theme.colors.main};
`;

export const CardTruckReviewsLocationContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 16px;

  margin-bottom: 16px;
`;

export const CardTruckReviewsLocationBox = styled.div`
  display: flex;
  align-items: center;

  gap: 4px;
`;

export const CardTruckReviewsLocationIcon = styled.svg`
  display: block;
  width: 16px;
  height: 16px;
`;

export const CardTruckReviewsLocationText = styled.p`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;

  color: ${p => p.theme.colors.main};
`;

export const CardTruckPrice = styled.p`
  display: block;

  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  text-align: left;

  color: ${p => p.theme.colors.main};
`;

export const CardTruckImageList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  gap: 48px;

  margin-bottom: 28px;
`;

export const CardTruckImage = styled.img`
  display: block;

  width: 292px;
  height: 312px;

  border-radius: 10px;

  object-fit: cover;
`;

export const CardTruckDescriptionText = styled.p`
  display: block;

  margin-bottom: 60px;

  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;

  color: ${p => p.theme.colors.text};
`;

export const CardTruckFeaturesReviewsList = styled.div`
  display: flex;

  gap: 40px;

  padding-bottom: 24px;
  margin-bottom: 44px;

  border-bottom: 1px solid ${p => p.theme.colors.grayLight};
`;

export const CardTruckFeaturesReviewsItem = styled(NavLink)`
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  text-decoration: none;

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
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &.active {
    &::after {
      transform: scaleX(1);
    }
  }
`;

export const CardTruckFeaturesReviewsBookingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 40px;
`;
