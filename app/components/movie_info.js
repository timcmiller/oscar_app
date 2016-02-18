'use strict';
import React,
{
  AppRegistry,
  Component,
  Image,
  ListView,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import styles from '../styles/movie_info_styles';
import Nominations from './nominations';
import Header from './header';

module.exports = class MovieInfo extends React.Component{

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
            {this.props.movie.synopsis}
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


