import { CardTrukReviewsContainer } from './CardTrukReviews.styled';

const CardTrukReviews = ({ reviews }) => {
  return (
    <CardTrukReviewsContainer>
      {reviews.map((e, i) => (
        <li key={i}>
          <div>
            <div>{e.reviewer_name.charAt(0)}</div>
            <p>{e.reviewer_name}</p>
            <div>{e.reviewer_rating}</div>
          </div>
          <p>{e.comment}</p>
        </li>
      ))}
    </CardTrukReviewsContainer>
  );
};

export default CardTrukReviews;
