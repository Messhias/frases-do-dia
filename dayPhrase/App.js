/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Alert
} from 'react-native';

const styles = {
    main: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
    },
    botao: {
      backgroundColor: '#538530',
      paddingVertical: 10,
      paddingHorizontal: 40,
      marginTop: 20
    },
    textoBotao: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold'
    }
};

const createPhrase = () => {
  let randomNumber = Math.random();
  // phrases
  const phrases = [
    'A partida só acaba quando terminar.',
    'Vencedor é aquele que ganha',
    'Ganhar é o oposto de perder',
    'Perder é o oposto de ganhar'
  ];
  randomNumber = Math.floor(randomNumber * 5);


  const phraseChosen = phrases[randomNumber];

  Alert.alert(phraseChosen);
};

type Props = {};
export default class App extends Component<Props> {


  render() {
    const {
      main,
      botao,
      textoBotao
    } = styles;
    return (
      <View style={main}>
        <Image source={require('./imagem/logo.png')} />
        <TouchableOpacity
          onPess={createPhrase}
          style={botao}>
          <Text style={textoBotao}>
            Nova Frase
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}
