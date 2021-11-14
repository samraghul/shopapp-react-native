import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  Dimensions,
  Alert
} from "react-native";
import Colors from "../constants/Colors";
import { useSelector, useDispatch } from "react-redux";
import * as cartAction from "../state/actions/Cart";

const ProductDetailsScreen = (props) => {
  const dispatch = useDispatch();
  const onCartPressHandler = (product) => {
    Alert.alert(
      "Add to cart",
      `Are you sure to add ${product.title} to cart?`,
      [
        { text: "Cancel", onPress: () => {} },
        {
          text: "Yes",
          onPress: () => dispatch(cartAction.addToCart(product)),
        },
      ]
    );
  };
  const productId = props.navigation.getParam("productId");

  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((product) => product.id === productId)
  );
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: selectedProduct.imageUrl,
        }}
        style={styles.image}
      />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{selectedProduct.title}</Text>
          <Text style={styles.price}>$ {selectedProduct.price}</Text>
          <Text style={styles.description}>{selectedProduct.description}</Text>
          <View style={styles.button}>
            <Button
              color={Colors.accent}
              title={"Add to cart"}
              onPress={() => onCartPressHandler(selectedProduct)}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

ProductDetailsScreen.navigationOptions = (navData) => {
  const productTitle = navData.navigation.getParam("productTitle");

  return {
    headerTitle: productTitle,
  };
};

export default ProductDetailsScreen;
const windowWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: windowWidth,
  },
  image: {
    height: 150,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    fontSize: 22,
    color: Colors.accent,
    marginVertical: 5,
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    width: "100%",
    alignSelf: "flex-end",
    marginBottom: 15,
  },
  scrollContainer: {
    margin: 5,
  },
  contentContainer: {
    flex: 1,
  },
});
