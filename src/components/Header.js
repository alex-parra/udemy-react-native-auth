import React, { Component } from 'react';
import { View, Text } from 'react-native';

const styles = {
  view: {
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#222',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    position: 'relative',
    elevation: 2,
  },
  text: {
    fontSize: 30,
  },
};

class Header extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>FireBase Auth</Text>
      </View>
    );
  }
}

export default Header;
