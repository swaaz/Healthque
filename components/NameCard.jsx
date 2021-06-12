import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const NameCard = ({ imageUrl, name }) => {
  console.log(imageUrl, name);
  return (
    <View style={styles.container}>
      <Image style={styles.profileImg} source={{ uri: imageUrl }} />
      <Text style={styles.profileName}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    padding: 20,
  },

  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },

  profileName: {
    fontWeight: "700",
    fontSize: 32,
  },
});

export default NameCard;
