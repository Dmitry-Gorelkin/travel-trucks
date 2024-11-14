import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

export const CardTrukBookingFormForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;

  /* margin-bottom: 24px; */
`;

export const CardTrukBookingFormField = styled(Field)`
  display: block;
  width: 100%;

  padding: 18px;

  color: ${p => p.theme.colors.gray};
  background-color: ${p => p.theme.colors.inputs};

  border-radius: 12px;
  border: none;

  outline: none;

  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;
export const CardTrukBookingFormErrorMessage = styled(ErrorMessage)`
  color: ${p => p.theme.colors.buttonHover};
`;
