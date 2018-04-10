/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

const styles = {
    mainHeaderText: {
        fontSize: 30,
        backgroundColor: '#08509B',
        color: 'white',
        padding: 30,
        fontWeight: '900',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5
        },
        shadowOpacity: 0.75,
        shadowRadius: 3
    },
    mainHeaderText2: {
        fontSize: 30,
        backgroundColor: '#2A48FA',
        color: 'white',
        padding: 30,
        fontWeight: '900',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5
        },
        shadowOpacity: 0.75,
        shadowRadius: 3
    },
    estiloView: {
        backgroundColor: 'skyblue',
        height: 600,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column'
    }
};

type Props = {};
export default class App extends Component<Props> {
  render() {
    const { mainHeaderText, mainHeaderText2, estiloView } = styles;
    return (
      <View style={estiloView}>
        <Text style={mainHeaderText}>
          Frases do dia
        </Text>
        <Text style={mainHeaderText2}>
          Frases do dia2
        </Text>
      </View>
    );
  }
}
