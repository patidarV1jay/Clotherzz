import React from 'react';
import { Animated, Pressable, Text, TextInput, View } from 'react-native';
import styles from './MyProfileStyles';
import useMyProfile from './useMyProfile';
import { Colors, moderateScale } from '../../themes';
import { CustomTextInput } from '../../components';
import { Calendar, CaretDown, CaretUp } from 'phosphor-react-native';
import { useDateTimePicker } from '../../hooks';

const MyProfile = () => {
  const {
    formik,
    toggleDropDown,
    dropdownVisible,
    selectGender,
    selectedGender,
  } = useMyProfile();

  const { handleSubmit } = formik;
  const { birthDate, showDatepicker } = useDateTimePicker();
  return (
    <View style={styles.container}>
      <View style={styles.wrapperContainer}>
        <CustomTextInput
          formik={formik}
          title="firstName"
          heading="First Name"
        />
        <CustomTextInput formik={formik} title="lastName" heading="Last Name" />
        <CustomTextInput
          formik={formik}
          title="mobile"
          heading="Mobile"
          maxLength={10}
        />
        <CustomTextInput formik={formik} title="email" heading="Email" />
        <View style={styles.dobView} onTouchEnd={showDatepicker}>
          <Text style={styles.heading}>Date Of Birth</Text>
          <View style={styles.dobWrapper}>
            <Text style={styles.dobText}>{birthDate}</Text>
            <Calendar
              weight="regular"
              color={Colors.purple}
              size={moderateScale(25)}
            />
          </View>
        </View>
        <View style={styles.dobView}>
          <Text style={styles.heading}>Select Gender</Text>
          <Pressable style={styles.dobWrapper} onPress={toggleDropDown}>
            <Text style={styles.dobText}>{selectGender}</Text>
            {dropdownVisible ? (
              <CaretUp
                weight="regular"
                color={Colors.purple}
                size={moderateScale(25)}
              />
            ) : (
              <CaretDown
                weight="regular"
                color={Colors.purple}
                size={moderateScale(25)}
              />
            )}
          </Pressable>
          {dropdownVisible && (
            <View style={styles.dropDownContainer}>
              <Text
                style={styles.genderText}
                onPress={() => selectedGender('Male')}>
                Male
              </Text>
              <Text
                style={styles.genderText}
                onPress={() => selectedGender('Female')}>
                Female
              </Text>
              <Text
                style={styles.genderText}
                onPress={() => selectedGender('Other')}>
                Other
              </Text>
            </View>
          )}
        </View>
        <Pressable
          style={[styles.dobView, styles.button]}
          onPress={() => handleSubmit()}>
          <Text style={styles.dobText}>Save</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MyProfile;
