import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    containerApp: {
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'space-around',
      backgroundColor: '#fff',
      alignItems: 'stretch',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
      marginLeft:'10%',
      marginRight:'10%',
      marginTop:'-40%'
    },
    topoDaTela:{
      marginTop:'20%',
      height: '59%',
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    meioDaTela: {
      height: '30%',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'stretch',
      marginBottom: '40%'
    },
    titulo: {
      fontSize: '25%',
      marginLeft: '10%',
      marginTop:'-40%',
    },
    logo:{
      width:'100%',
      height:'100%',
      shadowColor: 'black',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.5,
      shadowRadius: 3,
    },
  });