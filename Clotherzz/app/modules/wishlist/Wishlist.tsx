import { FlatList, Image, Pressable, Text, View } from 'react-native';
import { Images } from '../../assets';
import { Colors } from '../../themes';
import styles from './WishlistStyles';
import { SizeAndQuantityModal } from '../../components';
import useWishlist from './useWishlist';

const Wishlist = () => {
  const {
    setisVisible,
    isVisible,
    handleSizeAndQuantity,
    handleVisibility,
    modalData,
    size,
  } = useWishlist();
  const data = [
    {
      image: Images.signup,
      title: 'Captain America',
    },
    {
      image: Images.signup,
      title: 'Captain America',
    },
    {
      image: Images.signup,
      title: 'Captain America',
    },
    {
      image: Images.signup,
      title: 'Captain America',
    },
    {
      image: Images.signup,
      title: 'Captain America',
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={styles.listContainer}>
              <View style={styles.listWrapper}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.itemDescription}>
                  <Text style={styles.title} numberOfLines={1}>
                    {item.title}
                  </Text>
                  <Text style={styles.subtitle}>Sweatshirts</Text>
                  <Text style={styles.title}>₹500</Text>
                </View>
                <View style={styles.hrLine} />
                <View style={styles.footer}>
                  <Text style={[styles.footerText, { color: Colors.red }]}>
                    Remove
                  </Text>
                  <View style={styles.vrLine} />
                  <Pressable onPress={handleVisibility}>
                    <Text style={[styles.footerText]}>Add To Cart</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          );
        }}
        key={2}
        numColumns={2}
      />
      <SizeAndQuantityModal
        isVisible={isVisible}
        handleSizeAndQuantity={handleSizeAndQuantity}
        handleVisible={handleVisibility}
        modalData={modalData}
        addCartButton={true}
        measurement={size}
      />
    </View>
  );
};

export default Wishlist;
