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
  TouchableHighlight,
} = React;

let Nominations = require('./nominations');

class MovieInfo extends React.Component{

  render() {
    return (
      <TouchableHighlight
      onPress={this.props._onPressMovieInfo}>
        <View style={[styles.container, styles.vert]}>
          <View style={[styles.container, styles.hor]}>
            <Image
              source={{uri: this.props.movie.posters.thumbnail}}
              style={styles.thumbnail}/>
            <Text>Nominations:{'\n'}</Text>
            <Nominations {...this.props} />
          </View>
          <View>
            <Text style={styles.title}>{this.props.movie.title}</Text>
            <Text style={styles.year}>{this.props.movie.year}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 20,
  },
  vert: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  hor: {
    flexDirection: 'row',
    alignItems: 'stretch'
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
    width: 53,
    height: 81,
    alignSelf: 'flex-end',
  },
});

module.exports = MovieInfo;


