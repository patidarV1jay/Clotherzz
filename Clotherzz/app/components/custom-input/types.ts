import { FormikValues } from 'formik';
import { KeyboardTypeOptions } from 'react-native';

export interface PropsType {
  formik: FormikValues;
  title: string;
  heading: string;
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number;
}
