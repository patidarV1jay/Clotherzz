import React, { useMemo } from 'react';
import {
  FlatList,
  Modal,
  Pressable,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Colors } from '../../themes';
import styles from './SizeAndQuantityModalStyles';
import { PropsType } from './types';

const SizeAndQtyModal = ({
  isVisible,
  handleVisible,
  modalData,
  handleSizeAndQuantity,
  measurement,
  addCartButton,
}: PropsType) => {
  const data = useMemo(
    () =>
      Array(10)
        .fill(0)
        .map((_, index) => `${index + 1}`),
    [],
  );
  const size = ['S', 'M', 'L', 'XL', 'XLL'];

  return (
    <Modal
      visible={isVisible}
      transparent
      onRequestClose={() => handleVisible('')}>
      <StatusBar backgroundColor={Colors.opaque} />
      <View style={styles.modalContainer}>
        <View
          style={styles.emptyContainer}
          onTouchEnd={() => handleVisible('')}
        />
        <View style={styles.modalWrapperContainer}>
          <FlatList
            data={modalData === 'quantity' ? data : size}
            renderItem={({ item }) => {
              return (
                <View
                  style={
                    measurement === item
                      ? [styles.listItem, { backgroundColor: Colors.light }]
                      : styles.listItem
                  }>
                  <Pressable
                    style={styles.listItemWrapper}
                    onPress={() => handleSizeAndQuantity(item)}>
                    <Text
                      style={[
                        measurement === item
                          ? styles.listItemDataFill
                          : styles.listItemData,
                      ]}>
                      {item}
                    </Text>
                  </Pressable>
                </View>
              );
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          {addCartButton && (
            <TouchableOpacity
              style={
                measurement
                  ? [styles.addCartButton, { backgroundColor: 'white' }]
                  : styles.addCartButton
              }
              disabled={measurement ? false : true}>
              <Text
                style={
                  measurement
                    ? [
                        styles.addButtonText,
                        { color: Colors.purple, fontWeight: 'bold' },
                      ]
                    : styles.addButtonText
                }>
                Add To Cart
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default SizeAndQtyModal;
