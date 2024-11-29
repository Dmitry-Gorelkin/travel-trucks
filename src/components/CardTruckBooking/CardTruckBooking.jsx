import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button } from '../UI/Button/Button.styled';
import {
  CardTruckBookingContainer,
  CardTruckBookingForm,
  CardTruckBookingFormContainer,
  CardTruckBookingFormErrorMessage,
  CardTruckBookingFormField,
  CardTruckBookingText,
  CardTruckBookingTitle,
} from './CardTruckBooking.styled';
import toast from 'react-hot-toast';

const initialValues = {
  name: '',
  email: '',
  date: '',
  comment: '',
};

const CardTruckBooking = () => {
  // Устанавливаем сегодняшнюю дату в формате ISO (YYYY-MM-DD) для использования в валидации
  const today = new Date().toISOString().split('T')[0];

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Minimum 2 characters')
      .max(10, 'Maximum 10 characters')
      .required('Required field'),
    email: Yup.string().email('Invalid email').required('Required field'),
    date: Yup.date().min(today, 'Date must not be earlier than today').required('Required field'),
    comment: Yup.string(),
  });

  return (
    <CardTruckBookingContainer>
      <div>
        <CardTruckBookingTitle>Book your campervan now</CardTruckBookingTitle>
        <CardTruckBookingText>
          Stay connected! We are always ready to help you.
        </CardTruckBookingText>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          toast.success('The application has been sent, we will contact you.');
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <CardTruckBookingForm>
            <CardTruckBookingFormContainer>
              <CardTruckBookingFormField type="text" name="name" placeholder="Name*" />
              <CardTruckBookingFormErrorMessage name="name" component="div" className="error" />
            </CardTruckBookingFormContainer>

            <CardTruckBookingFormContainer>
              <CardTruckBookingFormField type="email" name="email" placeholder="Email*" />
              <CardTruckBookingFormErrorMessage name="email" component="div" className="error" />
            </CardTruckBookingFormContainer>

            <CardTruckBookingFormContainer>
              <CardTruckBookingFormField
                type="date"
                name="date"
                min={today}
                placeholder="Booking date*"
              />
              <CardTruckBookingFormErrorMessage name="date" component="div" className="error" />
            </CardTruckBookingFormContainer>

            <CardTruckBookingFormContainer>
              <CardTruckBookingFormField as="textarea" name="comment" placeholder="Comment" />
              <CardTruckBookingFormErrorMessage name="comment" component="div" className="error" />
            </CardTruckBookingFormContainer>

            <Button type="submit" disabled={isSubmitting}>
              Send
            </Button>
          </CardTruckBookingForm>
        )}
      </Formik>
    </CardTruckBookingContainer>
  );
};

export default CardTruckBooking;
