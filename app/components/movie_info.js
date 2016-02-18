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

export default class MovieInfo extends Component{

  render() {

    if(this.props.showPicture) return this.renderPicture(this.props.currentMovie);
    var text = ' Nomination';
    if(this.props.currentMovie.nominations.length > 1) text += 's';
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
            <Text style={styles.title}>{this.props.currentMovie.title}</Text>
            <Text style={styles.year}>{this.props.currentMovie.nominations.length + text}</Text>
          </View>
          <TouchableHighlight onPress={() => this.props._onPicturePress()}>
            <Image
              source={{uri: this.props.currentMovie.posters.thumbnail}}
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
            {this.props.currentMovie.synopsis}
          </Text>
        </View>
      </View>
    );
  }

  renderPicture() {
    return (
      <TouchableHighlight onPress={() => this.props._onPicturePress()}>
        <Image
          source={{uri: this.props.currentMovie.posters.thumbnail}}
          style={styles.fullScreen}/>
      </TouchableHighlight>
    );
  }
}


