import { ErrorMessage, Field, Form, Formik } from 'formik';
import {
  CardTrukBookingFormForm,
  CardTrukBookingFormContainer,
  CardTrukBookingFormField,
  CardTrukBookingFormErrorMessage,
} from './CardTrukBookingForm.styled';
import { Button } from '../UI/Button/Button.styled';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  date: '',
  comment: '',
};

const CardTrukBookingForm = () => {
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
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values); // выводим данные формы в консоль
        resetForm(); // очищаем форму после отправки
      }}
    >
      {({ isSubmitting }) => (
        <CardTrukBookingFormForm>
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
            Отправить
          </Button>
        </CardTrukBookingFormForm>
      )}
    </Formik>
  );
};

export default CardTrukBookingForm;
