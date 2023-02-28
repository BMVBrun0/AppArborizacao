import MapView, {Marker} from 'react-native-maps';
import { FAB } from 'react-native-paper';
import { View, SafeAreaView} from 'react-native';
import styles from '../Mapa/styles';

export function Mapa({navigation}) {
  function voltar() {
    navigation.pop()
  }
  return (
    <View style={styles.container}>
    <SafeAreaView></SafeAreaView>
      <MapView style={styles.map} initialRegion={{latitude: -27.1042707,longitude: -52.6161499,latitudeDelta: 0.0922, longitudeDelta: 0.0421,}}>
          <Marker coordinate={{latitude: -27.1042707, longitude: -52.6161499,}}/>   
      </MapView>
      <FAB label="<-" style={styles.fab} onPress={voltar}/>
    </View>
  );
}
