'use strict';

let React = require('react-native');
let {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} = React;

class MovieInfo extends React.Component{

  render() {
    return (
      <Text>
        You Just clicked on
        {this.props.movie.title}
      </Text>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
});

module.exports = MovieInfo;


