import MapView, {Marker} from 'react-native-maps';
import { FAB } from 'react-native-paper';
import { StyleSheet, View, SafeAreaView} from 'react-native';

export function Mapa({navigation}) {
  function voltar() {
    navigation.pop()
  }
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{latitude: -27.1042707,longitude: -52.6161499,latitudeDelta: 0.0922, longitudeDelta: 0.0421,}}>
          <Marker coordinate={{latitude: -27.1042707, longitude: -52.6161499,}}/>   
      </MapView>
      <FAB label="<-" style={styles.fab} onPress={voltar}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  fab: {
    position: 'absolute',
    left: '4%',
    bottom: '87%',
    backgroundColor:'white'
  },
});
