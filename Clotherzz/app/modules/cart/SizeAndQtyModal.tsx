import React, { useMemo } from 'react';
import {
  FlatList,
  Modal,
  Pressable,
  StatusBar,
  Text,
  View,
} from 'react-native';
import styles from './CartScreenStyles';
import { PropsType } from './types';
import { Colors } from '../../themes';

const SizeAndQtyModal = ({
  isVisible,
  handleVisible,
  modalData,
  handleSizeAndQuantity,
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
    <Modal visible={isVisible} transparent>
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
                <View style={styles.listItem}>
                  <Pressable
                    style={styles.listItemWrapper}
                    onPress={() => handleSizeAndQuantity(item)}>
                    <Text style={styles.listItemData}>{item}</Text>
                  </Pressable>
                </View>
              );
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </Modal>
  );
};

export default SizeAndQtyModal;
