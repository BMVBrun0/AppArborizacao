import React from "react";
import {StyleSheet,Text,View,FlatList,ListRenderItemInfo} from "react-native";
import { ListaArvoresHeader } from '../components/ListaArvoresHeader/ListaArvoresHeader';
import { ListaArvoresItem } from "../components/ListaArvoresItem";
import { SeparatorItem } from "../components/SeparatorItem/SeparatorItem";
import { Arvores, coffeeList } from "../data/ArvoresList";

export function ListaDeArvores() {
  function renderItem({ item }: ListRenderItemInfo<Arvores>) {
    return <ListaArvoresItem {...item} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        // ListHeaderComponent={CoffeeHeader}
        ItemSeparatorComponent={SeparatorItem}
        data={coffeeList}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
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
