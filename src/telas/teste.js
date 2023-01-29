import {StyleSheet, Text, View, TouchableOpacity, Image, FlatList} from 'react-native';
import React,{ PureConponent } from 'react';


export default class Teste extends PureConponent{
    constructor(props){
        super(props)
        this.state = {
            items:[]
        }
    }
    _renderItem = ({item, index}) => {
        let {card, cardImage, cardText} = styles
        return(
            <TouchableOpacity style={card}>
                <Image style={cardImage} source={require('../../assets/imagens/arvore.png')}></Image>
                <Text style= {cardText}>Card Titles</Text>
            </TouchableOpacity>
        )
    }
    render(){
        let {container} = styles
        let {items} = this.state
        return (
        <FlatList 
        style={container} 
        data={items} keyExtractor={(item, index) => index.toString()}
        renderItem={this._renderItem}></FlatList>
        )
    }
}
const styles = StyleSheet.create({
    container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center'
    },
    cardText: {
    fontSize: '15%',
    padding:'5%'
    },
    card:{
        backgroundColor:'white',
        marginBottom:'90%',
        width:'95%',
        shadowColor:'black',
        shadowOpacity:'1',
        shadowOffset:{
            width:3,
            height:3,
        }
    },
    cardImage:{
        width:'95%',
        height:'30%',
        marginLeft:'5%',
        marginRight:'5%',
        resizeMode:'cover'
    },
});