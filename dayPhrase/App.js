/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

const styles = {
    main: {
        paddingTop: 40
    }
};

const botaoPressionado = () => {
  alert('ok');
}

type Props = {};
export default class App extends Component<Props> {


  render() {
    const { main } = styles;
    return (
      <View style={main}>
          <Button
            onPress={botaoPressionado}
            color="#841584"
            accessibilityLabel="Clica ai"
            title="Clica ai"
          />
      </View>
    );
  }
}
