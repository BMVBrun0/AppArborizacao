import { Text, View, Button, Image, Pressable,SafeAreaView } from 'react-native';
import styles from '../TelaInicio/styles';

export function TelaInicio({navigation}) {

  function entrar() {
    navigation.navigate('MenusTela')
  }
  return (
    <View style={styles.containerApp}>
      <SafeAreaView></SafeAreaView>
      <View>
        <View style={styles.topoDaTela}>
          <Text style={styles.titulo}>Arborização Chapecó</Text>
          <Image source={require('../../../assets/imagens/logo.png')} style={styles.logo} /> 
        </View>
      </View>
      <View style={styles.meioDaTela}>
        <Pressable style={styles.button} onPress={entrar}>
            <Text style={styles.text}>Entrar</Text>
        </Pressable>
      </View>
    </View>
  );
}


