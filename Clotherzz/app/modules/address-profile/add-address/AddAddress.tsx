import { CaretLeft } from 'phosphor-react-native';
import React from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { CustomTextInput } from '../../../components';
import { Colors, moderateScale, verticleScale } from '../../../themes';
import styles from './AddAddressStyles';
import useAddAddress from './useAddAddress';

const AddAddress = ({ isVisible, handleVisible }: PropsType) => {
  const { formik, pincodeArea, loading } = useAddAddress();
  const { handleSubmit, values } = formik;

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      onRequestClose={handleVisible}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={handleVisible}>
            <CaretLeft
              weight="bold"
              size={moderateScale(26)}
              color={Colors.light}
            />
          </Pressable>
          <Text style={styles.addAddressText}>Add Address</Text>
        </View>
        <KeyboardAvoidingView behavior="position">
          <ScrollView
            contentContainerStyle={{ paddingBottom: verticleScale(100) }}>
            <CustomTextInput formik={formik} title="name" heading="Name" />
            <CustomTextInput
              formik={formik}
              title="mobile"
              heading="Mobile"
              keyboardType="number-pad"
              maxLength={10}
            />
            <CustomTextInput
              formik={formik}
              title="address"
              heading="Address"
            />
            <CustomTextInput
              formik={formik}
              title="locality"
              heading="Locality"
            />
            <CustomTextInput
              formik={formik}
              title="pincode"
              heading="Pincode"
              keyboardType="number-pad"
              maxLength={6}
            />
            <View style={styles.horizontalSpacing}>
              <Text style={styles.heading}>City / District</Text>
              <View style={styles.inputBox}>
                {loading ? (
                  <ActivityIndicator style={styles.inputBoxText} />
                ) : (
                  <Text style={styles.inputBoxText}>
                    {pincodeArea?.Status == 'Error'
                      ? pincodeArea?.Message
                      : pincodeArea?.PostOffice &&
                        pincodeArea?.PostOffice[0]?.District}
                  </Text>
                )}
              </View>
            </View>
            <View style={styles.horizontalSpacing}>
              <Text style={styles.heading}>State</Text>
              <View style={styles.inputBox}>
                {loading ? (
                  <ActivityIndicator style={styles.inputBoxText} />
                ) : (
                  <Text style={styles.inputBoxText}>
                    {pincodeArea?.Status == 'Error'
                      ? pincodeArea?.Message
                      : pincodeArea?.PostOffice &&
                        pincodeArea?.PostOffice[0]?.State}
                  </Text>
                )}
              </View>
              <TouchableOpacity
                style={styles.saveButton}
                onPress={() => handleSubmit()}>
                <Text style={[styles.inputBoxText, styles.lightColor]}>
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};

export default AddAddress;
