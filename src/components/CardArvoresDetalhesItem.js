import React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";

export function CardArvoresDetalhesItem({ name,image,icon,clique,description}) {

  function detalhes() {
    clique();
  }
  function localizacao() {
    cliqueIcon();
  }
  return (
  // <View style={styles.container}>
  //   <Pressable onPress={detalhes}>
  //     <Image style={styles.imagem} source={image} />
  //   </Pressable>
  //   <View style={styles.content}>
  //     <Text style={styles.title}>{name}</Text>
  //     <Pressable onPress={localizacao}>
  //       <Image style={styles.icon} source={icon}></Image>
  //     </Pressable>
  //     <Text numberOfLines={6} style={styles.description}>
  //       {description}
  //     </Text>
  //   </View>
  // </View>

  <View style={styles.container}>
  <View>
    <View style={styles.topoDaTela}>
      <Image style={styles.imagem} source={image} />
    </View>
  </View>
  <View style={styles.meioDaTela}>
    <Text style={styles.title}>{name}</Text>
      <Pressable onPress={localizacao}>
        <Image style={styles.icon} source={icon}></Image>
      </Pressable>
      <Text numberOfLines={6} style={styles.description}>
        {description}
      </Text>
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
