import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
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
  CardTrukReviewsContainerLoader,
} from './CardTrukReviews.styled';
import LoaderPuff from '../UI/LoaderPuff/LoaderPuff';

const CardTrukReviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const respons = await axios(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`);

        setReviews(respons.data.reviews);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [id]);

  return (
    <CardTrukReviewsContainer>
      {loading ? (
        <CardTrukReviewsContainerLoader>
          <LoaderPuff />
        </CardTrukReviewsContainerLoader>
      ) : (
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
      )}
    </CardTrukReviewsContainer>
  );
};

export default CardTrukReviews;
