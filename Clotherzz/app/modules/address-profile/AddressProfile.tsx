import { ArrowCircleRight, PlusCircle } from 'phosphor-react-native';
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { Colors, moderateScale, verticleScale } from '../../themes';
import styles from './AddressStyles';
import { AddAddress } from './add-address';
import useAddressProfile from './useAddressProfile';

const AddressProfile = () => {
  const {
    isVisible,
    handleModalVisibility,
    isSelected,
    handleSelected,
    params,
  } = useAddressProfile();
  return (
    <View style={styles.container}>
      {/* <View>
        <Image source={Images.noAddress} style={styles.noAddressImage} />
        <Text style={styles.noAddressText}>No Address Found</Text>
      </View> */}
      <ScrollView
        style={styles.wrapperContainer}
        contentContainerStyle={{ paddingBottom: verticleScale(40) }}
        showsVerticalScrollIndicator={false}>
        <View
          style={styles.addressView}
          onTouchEnd={() => handleSelected('default')}>
          <View style={styles.row}>
            <Text style={styles.darkText}>John Doe</Text>
            <Text style={styles.default}>Default</Text>
          </View>
          <Text style={styles.grayText}>T-04, A44, Sector-2</Text>
          <Text style={styles.grayText}>T-04, A44, Sector-2</Text>
          <Text style={styles.grayText}>T-04, A44, Sector-2</Text>
          {isSelected === 'default' && (
            <>
              <View style={styles.hrLine} />
              <View style={styles.button}>
                <Pressable>
                  <Text style={[styles.buttonText, styles.edit]}>Edit</Text>
                </Pressable>
                <View style={styles.vrLine} />
                <Pressable>
                  <Text style={[styles.buttonText, styles.delete]}>Delete</Text>
                </Pressable>
              </View>
            </>
          )}
        </View>
        <View
          style={styles.addressView}
          onTouchEnd={() => handleSelected('one')}>
          <Text style={styles.darkText}>John Doe</Text>
          <Text style={styles.grayText}>T-04, A44, Sector-2</Text>
          <Text style={styles.grayText}>T-04, A44, Sector-2</Text>
          <Text style={styles.grayText}>T-04, A44, Sector-2</Text>
          {isSelected === 'one' && (
            <>
              <View style={styles.hrLine} />
              <View style={styles.button}>
                <Pressable>
                  <Text style={[styles.buttonText, styles.edit]}>Edit</Text>
                </Pressable>
                <View style={styles.vrLine} />
                <Pressable>
                  <Text style={[styles.buttonText, styles.delete]}>Delete</Text>
                </Pressable>
              </View>
            </>
          )}
        </View>
        <View style={styles.addressView}>
          <Text style={styles.darkText}>John Doe</Text>
          <Text style={styles.grayText}>T-04, A44, Sector-2</Text>
          <Text style={styles.grayText}>T-04, A44, Sector-2</Text>
          <Text style={styles.grayText}>T-04, A44, Sector-2</Text>
          <View style={styles.hrLine} />
          <View style={styles.button}>
            <Pressable>
              <Text style={[styles.buttonText, styles.edit]}>Edit</Text>
            </Pressable>
            <View style={styles.vrLine} />
            <Pressable>
              <Text style={[styles.buttonText, styles.delete]}>Delete</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.addressView}>
          <Text style={styles.darkText}>John Doe</Text>
          <Text style={styles.grayText}>T-04, A44, Sector-2</Text>
          <Text style={styles.grayText}>T-04, A44, Sector-2</Text>
          <Text style={styles.grayText}>T-04, A44, Sector-2</Text>
          <View style={styles.hrLine} />
          <View style={styles.button}>
            <Pressable>
              <Text style={[styles.buttonText, styles.edit]}>Edit</Text>
            </Pressable>
            <View style={styles.vrLine} />
            <Pressable>
              <Text style={[styles.buttonText, styles.delete]}>Delete</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.addressView}>
          <Text style={styles.darkText}>John Doe</Text>
          <Text style={styles.grayText}>T-04, A44, Sector-2</Text>
          <Text style={styles.grayText}>T-04, A44, Sector-2</Text>
          <Text style={styles.grayText}>T-04, A44, Sector-2</Text>
          <View style={styles.hrLine} />
          <View style={styles.button}>
            <Pressable>
              <Text style={[styles.buttonText, styles.edit]}>Edit</Text>
            </Pressable>
            <View style={styles.vrLine} />
            <Pressable>
              <Text style={[styles.buttonText, styles.delete]}>Delete</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.addressView}>
          <Text style={styles.darkText}>John Doe</Text>
          <Text style={styles.grayText}>T-04, A44, Sector-2</Text>
          <Text style={styles.grayText}>T-04, A44, Sector-2</Text>
          <Text style={styles.grayText}>T-04, A44, Sector-2</Text>
          <View style={styles.hrLine} />
          <View style={styles.button}>
            <Pressable>
              <Text style={[styles.buttonText, styles.edit]}>Edit</Text>
            </Pressable>
            <View style={styles.vrLine} />
            <Pressable>
              <Text style={[styles.buttonText, styles.delete]}>Delete</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.addressView}>
          <Text style={styles.darkText}>John Doe</Text>
          <Text style={styles.grayText}>T-04, A44, Sector-2</Text>
          <Text style={styles.grayText}>T-04, A44, Sector-2</Text>
          <Text style={styles.grayText}>T-04, A44, Sector-2</Text>
          <View style={styles.hrLine} />
          <View style={styles.button}>
            <Pressable>
              <Text style={[styles.buttonText, styles.edit]}>Edit</Text>
            </Pressable>
            <View style={styles.vrLine} />
            <Pressable>
              <Text style={[styles.buttonText, styles.delete]}>Delete</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <View style={[styles.addButton]}>
        {params && (
          <Pressable onPress={handleModalVisibility} style={styles.corner}>
            <ArrowCircleRight
              size={moderateScale(50)}
              weight="fill"
              color={Colors.purple}
            />
          </Pressable>
        )}
        <Pressable onPress={handleModalVisibility} style={styles.corner}>
          <PlusCircle
            size={moderateScale(50)}
            weight="fill"
            color={Colors.purple}
          />
        </Pressable>
      </View>
      <AddAddress isVisible={isVisible} handleVisible={handleModalVisibility} />
    </View>
  );
};

export default AddressProfile;
