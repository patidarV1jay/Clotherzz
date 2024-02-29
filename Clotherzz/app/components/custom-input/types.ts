import { FormikValues } from 'formik';
import { KeyboardTypeOptions } from 'react-native';

export interface PropsType {
  placeholder: string;
  formik: FormikValues;
  title: string;
  heading: string;
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number;
}
