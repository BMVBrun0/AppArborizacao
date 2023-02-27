import { Text, View, Button, TextInput, Image, TouchableOpacity, NavigationContainer,SafeAreaView } from 'react-native';
import styles from '../MenusTela/styles'

export function MenusTela({navigation}) {
  function qrCodeScanner() {
    navigation.navigate('QrCode')
  }
  function listaDeArvores(){
    navigation.navigate('ListaDeArvores')
  }
  function voltar1() {
    navigation.pop()
  }
  return (
    <View style={styles.containerApp}>
      <SafeAreaView></SafeAreaView>
      <View style={styles.topoDaTela}>
        <Text style={styles.titulo}>App Arborização</Text>
        <TouchableOpacity onPress={voltar1}>
            <Image source={require('../../../assets/imagens/logo.png')} style={styles.arrow} />
        </TouchableOpacity>
      </View>
      <View style={styles.meioTela}>
        <TouchableOpacity 
          onPress={qrCodeScanner}
        >
          <View style={styles.listaPlantas}>
              <View style={styles.divBotoes}>
                <Image source={require('../../../assets/imagens/qrCode.png')} style={styles.qrCode} />
                <Text>Leitor de QR Code</Text>
              </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.meioTela2}>
        <TouchableOpacity onPress={listaDeArvores}>
          <View style={styles.leitorQrCod}>
            <View style={styles.divBotoes}>
              <Image source={require('../../../assets/imagens/listIcon.png')} style={styles.listIcon} />
              <Text>Lista de Arvores na Região</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
