import styled from 'styled-components';

export const CardTrukReviewsContainer = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 44px;

  width: 631px;
  height: 588px;
`;

export const CardTrukReviewsItem = styled.li`
  display: flex;
  flex-direction: column;

  gap: 16px;
`;

export const CardTrukReviewsCaption = styled.div`
  display: flex;

  gap: 16px;
`;

export const CardTrukReviewsAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 60px;
  height: 60px;

  border-radius: 60px;

  background-color: ${p => p.theme.colors.badges};
`;

export const CardTrukReviewsAvatarText = styled.span`
  display: block;

  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  text-align: left;

  color: ${p => p.theme.colors.button};
`;

export const CardTrukReviewsNameRatingBox = styled.div`
  display: block;

  padding-top: 8px;
  padding-bottom: 8px;
`;

export const CardTrukReviewsName = styled.p`
  display: block;
  margin-bottom: 4px;

  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;

  color: ${p => p.theme.colors.main};
`;

export const CardTrukReviewsComments = styled.p`
  display: block;

  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;

  color: ${p => p.theme.colors.text};
`;
