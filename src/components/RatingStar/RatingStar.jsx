import icon from '../../assets/icons.svg';
import { RatingStarIcon, RatingStarList } from './RatingStar.styled';

const RatingStar = ({ rating }) => {
  let arrStar = new Array(rating).fill('star');
  const arrNoStar = new Array(5).fill('nostar');

  if (arrStar.length < 5) {
    arrStar = [...arrStar, ...arrNoStar.slice(0, 5 - arrStar.length)];
  }

  return (
    <RatingStarList>
      {arrStar.map((e, i) =>
        e === 'star' ? (
          <li key={i}>
            <RatingStarIcon>
              <use href={`${icon}#star-gold`}></use>
            </RatingStarIcon>
          </li>
        ) : (
          <li key={i}>
            <RatingStarIcon>
              <use href={`${icon}#star-white`}></use>
            </RatingStarIcon>
          </li>
        )
      )}
    </RatingStarList>
  );
};

export default RatingStar;
