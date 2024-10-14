import RatingStar from '../RatingStar/RatingStar';
import {
  CardTrukReviewsContainer,
  CardTrukReviewsItem,
  CardTrukReviewsAvatar,
  CardTrukReviewsAvatarText,
  CardTrukReviewsCaption,
  CardTrukReviewsNameRatingBox,
  CardTrukReviewsName,
  CardTrukReviewsComments,
} from './CardTrukReviews.styled';

const CardTrukReviews = ({ reviews }) => {
  return (
    <CardTrukReviewsContainer>
      {reviews
        ? reviews.map((e, i) => (
            <CardTrukReviewsItem key={i}>
              <CardTrukReviewsCaption>
                <CardTrukReviewsAvatar>
                  <CardTrukReviewsAvatarText>{e.reviewer_name.charAt(0)}</CardTrukReviewsAvatarText>
                </CardTrukReviewsAvatar>
                <CardTrukReviewsNameRatingBox>
                  <CardTrukReviewsName>{e.reviewer_name}</CardTrukReviewsName>
                  <RatingStar rating={e.reviewer_rating} />
                </CardTrukReviewsNameRatingBox>
              </CardTrukReviewsCaption>
              <CardTrukReviewsComments>{e.comment}</CardTrukReviewsComments>
            </CardTrukReviewsItem>
          ))
        : null}
    </CardTrukReviewsContainer>
  );
};

export default CardTrukReviews;
