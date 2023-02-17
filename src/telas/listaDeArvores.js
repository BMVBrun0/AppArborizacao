import React from "react";
import {StyleSheet,View,FlatList,IconButton} from "react-native";
import { ListaArvoresItem } from "../components/ListaArvoresItem";
import { SeparatorItem } from "../components/SeparatorItem/SeparatorItem";
import { arvores } from "../data/ArvoresList";

export function ListaDeArvores({navigation}) {
  function cliquei(){
    navigation.navigate('CardArvoresDetalhes')
  }

  function renderItem({ item }) {
    return <ListaArvoresItem {...item} clique={cliquei} />;
  }
  return (
    <View style={styles.container}>
      <FlatList ItemSeparatorComponent={SeparatorItem} data={arvores} keyExtractor={(item) => item.name} renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
