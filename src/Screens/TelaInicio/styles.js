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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    marginLeft: '20%',
    borderRadius: 50,
    width: '60%',
    marginTop: '40%',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  topoDaTela: {
    marginTop: '20%',
    height: '59%',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  meioDaTela: {
    height: '30%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    marginBottom: '40%',
  },
  titulo: {
    fontSize: 30,
    marginLeft: '13%',
  },
  botaoLogin: {
    borderRadius: 10,
  },
  usuario: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    fontWeight: 'bold',
    height: '100%',
    width: '80%',
    padding: 10,
    shadowColor: 'black',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  senha: {
    borderWidth: 1,
    borderColor: 'black',
    width: '80%',
    height: '30%',
    marginRight: '2%',
    backgroundColor: 'white',
    fontWeight: 'bold',
    padding: 10,
    shadowColor: 'black',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  containerInput: {
    marginTop: '10%',
    marginLeft: '15%',
  },
  logo: {
    width: '50%',
    height: '60%',
    marginLeft: '25%',
    marginTop: '10%',
    shadowColor: 'black',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  divUsu: {
    height: '42%',
    paddingBottom: '5%',
  },
});
