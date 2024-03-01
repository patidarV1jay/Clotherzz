import { FlatList, Image, Text, View } from 'react-native';
import { Images } from '../../assets';
import { Colors } from '../../themes';
import styles from './WishlistStyles';

const Wishlist = () => {
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
                  <Text style={[styles.footerText]}>Add To Cart</Text>
                </View>
              </View>
            </View>
          );
        }}
        key={2}
        numColumns={2}
      />
    </View>
  );
};

export default Wishlist;
