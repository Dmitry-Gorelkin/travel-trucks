import styled from 'styled-components';

export const CardTrukFeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 631px;
  height: 588px;

  padding: 44px 52px;

  border-radius: 10px;

  background-color: ${p => p.theme.colors.inputs};
`;
