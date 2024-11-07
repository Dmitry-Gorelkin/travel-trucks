import styled from 'styled-components';

export const CardTrukBookingContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  width: 641px;
  height: 588px;

  padding: 44px 57px;

  border: 1px solid ${p => p.theme.colors.grayLight};
  border-radius: 10px;
`;

export const CardTrukBookingTitle = styled.p`
  display: block;
  margin-bottom: 8px;

  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
`;

export const CardTrukBookingText = styled.p`
  display: block;

  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
`;
