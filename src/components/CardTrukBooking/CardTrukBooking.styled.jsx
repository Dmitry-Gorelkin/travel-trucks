import styled from 'styled-components';
import { ErrorMessage, Field, Form } from 'formik';

export const CardTrukBookingContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  width: 641px;
  height: 588px;

  padding: 44px 57px;

  border: 1px solid ${p => p.theme.colors.grayLight};
  border-radius: 10px;
`;

export const CardTrukBookingTitle = styled.p`
  display: block;
  margin-bottom: 8px;

  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
`;

export const CardTrukBookingText = styled.p`
  display: block;

  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
`;

export const CardTrukBookingForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

export const CardTrukBookingFormContainer = styled.div`
  display: block;
  width: 100%;
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
