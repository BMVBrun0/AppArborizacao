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
    topoDaTela:{
      backgroundColor:'white',
      width: '80%',
      height:'10%',
      marginLeft: '10%',
      borderRadius: '10%'
    },
    meioDaTela:{
      marginTop:'30%',
      marginLeft: '10%',
      height: '60%',
      width: '80%',
      flexDirection: 'column',
      justifyContent: 'space-around',
      backgroundColor: 'white',
      borderRadius: '10%',
    },
  
    titulo: {
      fontSize: '25%',
      marginLeft: '30%',
      marginTop: '7%',
    },
    senha: {
      borderWidth:1,
      borderColor:'black',
      width: '90%',
      height: '15%',
      backgroundColor: 'white',
      fontWeight: 'bold',
      padding: 10
    },
    containerInput: {
      marginTop: '10%',
      marginLeft: '10%',
    },
  
    arrow:{
      width:'15%',
      height:'64%',
      marginLeft: '5%',
      marginTop: '-7%',
    },
  
    baixoDaTela:{
  
    },
    divUsu:{
      height:'5%',
      paddingBottom:'5%',
    },
    divBotao:{
      marginRight:'15%',
    },
  });