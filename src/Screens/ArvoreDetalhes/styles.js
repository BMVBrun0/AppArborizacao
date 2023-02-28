import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    containerApp: {
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'space-around',
      backgroundColor: '#8fbc8f',
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
      marginTop:'-30%'
    },
    topoDaTela:{
      marginTop:'30%',
      height: '59%',
      flexDirection: 'column',
      justifyContent: 'space-around',
      padding:'3%'
    },
    meioDaTela: {
      height: '40%',
      width:'94%',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'stretch',
      marginBottom: '40%',
      borderRadius:'10%',
      backgroundColor:'white',
      marginLeft:'3%',
      marginBottom:'20%'
      //marginRight:'50%'
    },
    titulo: {
      fontSize: '25%',
      marginLeft: '10%',
      marginTop:'-10%',
    },
    logo:{
      width:'100%',
      height:'100%',
      shadowColor: 'black',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.5,
      shadowRadius: 3,
      borderRadius:'30%'
    },
  });