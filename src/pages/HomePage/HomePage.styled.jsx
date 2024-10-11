import styled from 'styled-components';
import backgroundImage from '../../assets/home-page.jpeg';

export const HomePageBackgroundImage = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  transform: scaleX(-1);

  height: calc(100vh - 72px);
`;

export const HomePageContainer = styled.div`
  transform: scaleX(-1);

  padding-top: 260px;
`;

export const HomePageTitle = styled.h1`
  margin-bottom: 16px;

  font-family: Inter;
  font-size: 48px;
  font-weight: 600;
  line-height: 32px;
  text-align: left;

  color: ${p => p.theme.colors.white};
`;

export const HomePageText = styled.p`
  margin-bottom: 40px;

  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  text-align: left;

  color: ${p => p.theme.colors.white};
`;
