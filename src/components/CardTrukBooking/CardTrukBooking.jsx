import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button } from '../UI/Button/Button.styled';
import {
  CardTrukBookingContainer,
  CardTrukBookingForm,
  CardTrukBookingFormContainer,
  CardTrukBookingFormErrorMessage,
  CardTrukBookingFormField,
  CardTrukBookingText,
  CardTrukBookingTitle,
} from './CardTrukBooking.styled';

const initialValues = {
  name: '',
  email: '',
  date: '',
  comment: '',
};

const CardTrukBooking = () => {
  // Устанавливаем сегодняшнюю дату в формате ISO (YYYY-MM-DD) для использования в валидации
  const today = new Date().toISOString().split('T')[0];

  // Схема валидации
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
    <CardTrukBookingContainer>
      <div>
        <CardTrukBookingTitle>Book your campervan now</CardTrukBookingTitle>
        <CardTrukBookingText>Stay connected! We are always ready to help you.</CardTrukBookingText>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values); // выводим данные формы в консоль
          resetForm(); // очищаем форму после отправки
        }}
      >
        {({ isSubmitting }) => (
          <CardTrukBookingForm>
            <CardTrukBookingFormContainer>
              <CardTrukBookingFormField type="text" name="name" placeholder="Name*" />
              <CardTrukBookingFormErrorMessage name="name" component="div" className="error" />
            </CardTrukBookingFormContainer>

            <CardTrukBookingFormContainer>
              <CardTrukBookingFormField type="email" name="email" placeholder="Email*" />
              <CardTrukBookingFormErrorMessage name="email" component="div" className="error" />
            </CardTrukBookingFormContainer>

            <CardTrukBookingFormContainer>
              <CardTrukBookingFormField
                type="date"
                name="date"
                min={today}
                placeholder="Booking date*"
              />
              <CardTrukBookingFormErrorMessage name="date" component="div" className="error" />
            </CardTrukBookingFormContainer>

            <CardTrukBookingFormContainer>
              <CardTrukBookingFormField as="textarea" name="comment" placeholder="Comment" />
              <CardTrukBookingFormErrorMessage name="comment" component="div" className="error" />
            </CardTrukBookingFormContainer>

            <Button type="submit" disabled={isSubmitting}>
              Send
            </Button>
          </CardTrukBookingForm>
        )}
      </Formik>
    </CardTrukBookingContainer>
  );
};

export default CardTrukBooking;
