import React, { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 20,
    justifyContent: 'center'
  },
  vert: {
    flexDirection: 'column',
  },
  hor: {
    alignSelf: 'center'
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 128,
    height: 196,
    alignSelf: 'center',
  },
  padding: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  fullScreen: {
    width: 480,
    height: 732,
    alignSelf: 'center',
  },
});
