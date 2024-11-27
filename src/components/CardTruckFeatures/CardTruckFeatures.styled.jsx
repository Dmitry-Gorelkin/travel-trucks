import styled from 'styled-components';

export const CardTruckFeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 631px;
  height: 588px;

  padding: 44px 52px;

  border-radius: 10px;

  background-color: ${p => p.theme.colors.inputs};
`;

export const CardTruckFeaturesTitle = styled.p`
  display: block;

  padding-bottom: 24px;
  margin-bottom: 24px;

  border-bottom: 1px solid ${p => p.theme.colors.grayLight};

  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;

  color: ${p => p.theme.colors.main};
`;

export const CardTruckFeaturesList = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 16px;
`;

export const CardTruckFeaturesItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const CardTruckFeaturesText = styled.span`
  display: block;

  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  text-transform: capitalize;

  color: ${p => p.theme.colors.main};
`;
