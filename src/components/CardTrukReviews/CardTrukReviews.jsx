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
  CardTrukReviewsList,
} from './CardTrukReviews.styled';
import { useSelector } from 'react-redux';
import { selectTruckCardReviews } from '../../redux/trucks/selectors';

const CardTrukReviews = () => {
  const reviews = useSelector(selectTruckCardReviews);

  return (
    <CardTrukReviewsContainer>
      <CardTrukReviewsList>
        {reviews
          ? reviews.map((e, i) => (
              <CardTrukReviewsItem key={i}>
                <CardTrukReviewsCaption>
                  <CardTrukReviewsAvatar>
                    <CardTrukReviewsAvatarText>
                      {e.reviewer_name.charAt(0)}
                    </CardTrukReviewsAvatarText>
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
      </CardTrukReviewsList>
    </CardTrukReviewsContainer>
  );
};

export default CardTrukReviews;
