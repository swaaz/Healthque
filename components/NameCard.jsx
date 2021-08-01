import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const NameCard = ({ imageUrl, name }) => {
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
    borderWidth: 2,
    borderColor: "black",
  },

  profileName: {
    fontWeight: "700",
    fontSize: 18,
  },
});

export default NameCard;
