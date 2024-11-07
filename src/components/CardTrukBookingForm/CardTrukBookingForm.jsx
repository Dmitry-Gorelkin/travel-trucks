import { ErrorMessage, Field, Form, Formik } from 'formik';
// import { FormContainer } from './CardTrukBookingForm.styled';
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
      .min(2, 'Минимум 2 символа')
      .max(10, 'Максимум 10 символов')
      .required('Обязательное поле'),
    email: Yup.string().email('Некорректный email').required('Обязательное поле'),
    date: Yup.date()
      .min(today, 'Дата должна быть не ранее сегодняшнего дня')
      .required('Обязательное поле'),
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
        <Form>
          <div>
            <label htmlFor="name">Имя</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="date">Дата</label>
            <Field type="date" name="date" min={today} />
            <ErrorMessage name="date" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="comment">Комментарий</label>
            <Field as="textarea" name="comment" />
            <ErrorMessage name="comment" component="div" className="error" />
          </div>

          <Button type="submit" disabled={isSubmitting}>
            Отправить
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default CardTrukBookingForm;
