import React from "react";
import { View, Image, StyleSheet, Text, Pressable,SafeAreaView } from "react-native";

export function ListaArvoresItem({ name, id, image, icon, clique, localizacao}) {

  function detalhes() {
    clique();
  }
  function maps() {
    localizacao();
  }
  return (
  <View style={styles.tela}>
    <SafeAreaView></SafeAreaView>
    <View style={styles.container}>
      <View style={styles.divImagem}>
        <Pressable onPress={detalhes}>
          <Image style={styles.imagem} source={image}/>
        </Pressable>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>
        <Pressable onPress={maps}>
          <View style={styles.divIcon}><Image style={styles.icon} source={icon}></Image></View>
        </Pressable>
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    marginTop:'4%',
    borderRadius:'20%',
  },

  tela:{
    backgroundColor:'#8fbc8f'
  },

  content: {
    flex: 1,
    marginLeft: '5%',
    //marginTop:'10%'
  },
divImagem:{
  //marginTop:'30%'
},
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6F4E37",
    marginBottom: 16,
  },
  imagem:{
    width: 130,
    height: 110,
  },
  icon:{
    width: '35%',
    height:'90%',
  },
  divIcon:{
    height:'50%',
    width:'30%',
    marginLeft:'3%'
  },
});
