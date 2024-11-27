import styled from 'styled-components';
import { ErrorMessage, Field, Form } from 'formik';

export const CardTruckBookingContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  width: 641px;
  height: 588px;

  padding: 44px 57px;

  border: 1px solid ${p => p.theme.colors.grayLight};
  border-radius: 10px;
`;

export const CardTruckBookingTitle = styled.p`
  display: block;
  margin-bottom: 8px;

  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
`;

export const CardTruckBookingText = styled.p`
  display: block;

  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
`;

export const CardTruckBookingForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

export const CardTruckBookingFormContainer = styled.div`
  display: block;
  width: 100%;
`;

export const CardTruckBookingFormField = styled(Field)`
  display: block;
  width: 100%;
  height: 60px;

  padding: 18px;

  color: ${p => p.theme.colors.gray};
  background-color: ${p => p.theme.colors.inputs};

  border-radius: 12px;
  border: none;

  outline: none;

  resize: none;

  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  ${p =>
    p.as === 'textarea' &&
    `
    resize: none;
    height: 118px; 
  `}
`;

export const CardTruckBookingFormErrorMessage = styled(ErrorMessage)`
  padding-left: 18px;

  color: ${p => p.theme.colors.buttonHover};

  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
`;
