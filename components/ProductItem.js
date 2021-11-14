import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Colors from '../constants/Colors';

const ProductItem = (props) => {
  
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: props.imageUrl,
        }}
      />
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.price}>{`$ ${props.price}`}</Text>
      <Text style={styles.description} numberOfLines={5}>{props.description}</Text>
      <View style={styles.actionContainer}>
        <View style={styles.buttonView}><Button color={Colors.accent} onPress={props.onViewPress} title={"View"} /></View>
        <View style={styles.buttonView}><Button color={Colors.accent} onPress={props.onCartPress} title={"Cart"} /></View>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    marginHorizontal: 10,
    justifyContent: 'center',
    backgroundColor: '#eee',
    padding: 10,
    elevation: 3,
    borderRadius: 5,
  },
  image: {
    height: 150,
  },
  title: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 14,
    marginBottom: 10
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
  },
  buttonView: {
      width: '30%'
  },
  price: {
      fontSize: 18,
      color: Colors.accent,
      marginBottom: 5,
      fontWeight: '800'
  }
});
