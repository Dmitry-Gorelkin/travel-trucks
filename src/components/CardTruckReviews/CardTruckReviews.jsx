import RatingStar from '../RatingStar/RatingStar';
import {
  CardTruckReviewsContainer,
  CardTruckReviewsItem,
  CardTruckReviewsAvatar,
  CardTruckReviewsAvatarText,
  CardTruckReviewsCaption,
  CardTruckReviewsNameRatingBox,
  CardTruckReviewsName,
  CardTruckReviewsComments,
  CardTruckReviewsList,
} from './CardTruckReviews.styled';
import { useSelector } from 'react-redux';
import { selectTruckCardReviews } from '../../redux/trucks/selectors';

const CardTruckReviews = () => {
  const reviews = useSelector(selectTruckCardReviews);

  return (
    <CardTruckReviewsContainer>
      <CardTruckReviewsList>
        {reviews
          ? reviews.map((e, i) => (
              <CardTruckReviewsItem key={i}>
                <CardTruckReviewsCaption>
                  <CardTruckReviewsAvatar>
                    <CardTruckReviewsAvatarText>
                      {e.reviewer_name.charAt(0)}
                    </CardTruckReviewsAvatarText>
                  </CardTruckReviewsAvatar>
                  <CardTruckReviewsNameRatingBox>
                    <CardTruckReviewsName>{e.reviewer_name}</CardTruckReviewsName>
                    <RatingStar rating={e.reviewer_rating} />
                  </CardTruckReviewsNameRatingBox>
                </CardTruckReviewsCaption>
                <CardTruckReviewsComments>{e.comment}</CardTruckReviewsComments>
              </CardTruckReviewsItem>
            ))
          : null}
      </CardTruckReviewsList>
    </CardTruckReviewsContainer>
  );
};

export default CardTruckReviews;
