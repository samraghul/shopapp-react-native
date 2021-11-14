import React from "react";
import { FlatList, Dimensions, StyleSheet, Alert, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";
import HeaderButton from '../components/HeaderButton';

import ProductItem from "../components/ProductItem";
import * as cartAction from "../state/actions/Cart";

const ProductOverviewScreen = (props) => {
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
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          title={itemData.item.title}
          price={itemData.item.price}
          description={itemData.item.description}
          imageUrl={itemData.item.imageUrl}
          onViewPress={() =>
            onViewPressHandler(props, itemData.item.id, itemData.item.title)
          }
          onCartPress={() => onCartPressHandler(itemData.item)}
        />
      )}
    />
  );
};

ProductOverviewScreen.navigationOptions = {
  headerTitle: "All products",
  headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
  <Item title='cart' iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'} onPress={() => {
    console.log('cart clicked');
  }}/>
</HeaderButtons>
};

const onViewPressHandler = (props, productId, productTitle) => {
  props.navigation.navigate("productsDetails", {
    productId,
    productTitle,
  });
};

const windowWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    width: windowWidth,
  },
});

export default ProductOverviewScreen;
