import * as Yup from 'yup';
import { ValidationStrings } from './Strings';

export const EmailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const NumberRegEx = /^[6-9]\d{9}$/;

export const AddressSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required(ValidationStrings.required),
  address: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required(ValidationStrings.required),
  mobile: Yup.string()
    .required(ValidationStrings.required)
    .matches(NumberRegEx, ValidationStrings.phoneInvalid),
  pincode: Yup.string().required(ValidationStrings.required),
  locality: Yup.string().required(ValidationStrings.required),
});
