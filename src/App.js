import React, { Component, Fragment } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';

import firebase from 'firebase';

import Header from './components/Header';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAb5rciElq7_MenS-N8qvDgYJTyXYqHY24',
      authDomain: 'reactnativeauth-f30b6.firebaseapp.com',
      databaseURL: 'https://reactnativeauth-f30b6.firebaseio.com',
      projectId: 'reactnativeauth-f30b6',
      storageBucket: '',
      messagingSenderId: '591152581515',
      appId: '1:591152581515:web:000e08681688f34c',
    });
  }

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
            <Header />
            <View style={styles.body} />
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
  },
  body: {
    backgroundColor: '#fff',
  },
});

export default App;
