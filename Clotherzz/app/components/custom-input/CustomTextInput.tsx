import React from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from './CustomTextInputStyles';
import { PropsType } from './types';

const CustomTextInput = ({
  formik,
  title,
  heading,
  keyboardType,
  maxLength,
}: PropsType) => {
  const { values, errors, handleBlur, handleChange, touched } = formik;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>
      <TextInput
        onChangeText={handleChange(title)}
        onBlur={handleBlur(title)}
        value={values.title}
        style={styles.input}
        keyboardType={keyboardType}
        maxLength={maxLength}
      />
      {errors[title] && touched[title] && (
        <Text style={styles.errorText}>{errors[title]}</Text>
      )}
    </View>
  );
};

export default CustomTextInput;
