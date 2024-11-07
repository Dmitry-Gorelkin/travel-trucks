import CardTrukBookingForm from '../CardTrukBookingForm/CardTrukBookingForm';
import {
  CardTrukBookingContainer,
  CardTrukBookingText,
  CardTrukBookingTitle,
} from './CardTrukBooking.styled';

const CardTrukBooking = () => {
  return (
    <CardTrukBookingContainer>
      <div>
        <CardTrukBookingTitle>Book your campervan now</CardTrukBookingTitle>
        <CardTrukBookingText>Stay connected! We are always ready to help you.</CardTrukBookingText>
      </div>
      <CardTrukBookingForm />
    </CardTrukBookingContainer>
  );
};

export default CardTrukBooking;
