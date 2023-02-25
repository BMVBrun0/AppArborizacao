import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Pressable } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { arvores } from "../../data/ArvoresList";
import styles from '../QrCodeScanner/styles';
//import { useRoute } from "@react-navigation/native";

export function QrCode({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Nada escaneado')
  //const navigator = useRoute();

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }


  //permissao da camera
  useEffect(() => {
    askForCameraPermission();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data)
    
    var resultados = arvores.filter(m => m.qrCode == data);
    if(resultados.length > 0){
      const id = resultados[0].id;
      navigation.navigate('ArvoreDetalhes', {id});
    }
    else{
      alert("Qrcode não encontrado!");
    }
    console.log(data)
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requisitando permissao da camera</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>Sem acesso a camera</Text>
        <Button title={'Permitir uso da camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }

  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }} />
      </View>
      <Pressable>
        <Text style={styles.maintext}>{text}</Text>
      </Pressable>
      {scanned && <Button title={'Ler novamente?'} onPress={() => setScanned(false)} color='tomato' />}
    </View>
  );
}
