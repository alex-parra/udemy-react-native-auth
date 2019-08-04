import React, { Component, Fragment } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';

import firebase from 'firebase';
import firebaseConfig from '../firebase.config.json';

import Header from './components/Header';

class App extends Component {
  componentWillMount() {
    console.log(firebaseConfig);
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
            <Header />
            <View style={styles.body}>
              <Text>{firebaseConfig.projectId}</Text>
            </View>
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
