import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export function ListaArvoresItem({ name, image, description ,icon, navigation}) {
  function detalhes() {
    navigation.navigate('MenusTela')
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={detalhes}>
        <Image style={styles.imagem} source={image} />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>
        <Image style={styles.icon} source={icon}></Image>
        {/* <Text numberOfLines={6} style={styles.description}>
          {description}
        </Text> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 5,
    marginTop:'5%'
  },

  content: {
    flex: 1,
    marginLeft: 16,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6F4E37",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: "#000",
  },
  imagem:{
    width: 140,
    height: 110,
  },
  icon:{
    width: '15%',
    height:'15%',
  },
});
