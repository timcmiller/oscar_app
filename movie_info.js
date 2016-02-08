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
let Header = require('./header');

class MovieInfo extends React.Component{

  render() {

    if(this.props.showPicture) return this.renderPicture(this.props.movie);
    var text = ' Nomination';
    if(this.props.movie.nominations.length > 1) text += 's';
    return (
      <View style={styles.padding}>
        <Header
        onBackPress={() => this.props._onPressMovieInfo()}
        pressFilter={this.props._onPressFilter}
        back={'Back'}
        expandFilter={this.props.expandFilter}
        {...this.props}/>
        <View style={[styles.container, styles.vert]}>
          <View>
            <Text style={styles.title}>{this.props.movie.title}</Text>
            <Text style={styles.year}>{this.props.movie.nominations.length + text}</Text>
          </View>
          <TouchableHighlight onPress={() => this.props._onPicturePress()}>
            <Image
              source={{uri: this.props.movie.posters.thumbnail}}
              style={styles.thumbnail}/>
          </TouchableHighlight>
          <Text style={styles.title}>Nominations:</Text>
          <View style={styles.hor}>
            <Nominations {...this.props} />
          </View>
          <Text style={styles.title}>
            Synopsis:
          </Text>
          <Text>
            {movie.synopsis}
          </Text>
        </View>
      </View>
    );
  }

  renderPicture() {
    return (
      <TouchableHighlight onPress={() => this.props._onPicturePress()}>
        <Image
          source={{uri: this.props.movie.posters.thumbnail}}
          style={styles.fullScreen}/>
      </TouchableHighlight>
    );
  }
}

var styles = StyleSheet.create({
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
  },
  fullScreen: {
    width: 480,
    height: 732,
    alignSelf: 'center',
  },
});

module.exports = MovieInfo;


