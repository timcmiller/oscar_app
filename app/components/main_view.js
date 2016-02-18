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

import styles from '../styles/base_styles';
import Header from './header';
import MovieInfo from './movie_info';
import lodash from 'lodash';

var REQUEST_URL = 'http://oscarnom-api.herokuapp.com/api/movies';
// var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

var MOCKED_MOVIES_DATA = [
  {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];
var MOCK_LIST = ['Best Picture', 'Best Actor', 'Best Support Actor'];

module.exports = class MainView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      movieData: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          movieData: responseData.movies,
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
        });
        this.props.isLoaded();
      })
      .done();
  }

  _onPressMovieInfo() {
    this.props.selectMovie();
  }

  _onPressMovie(movie){
    this.setState({ movie });
    this.props.selectMovie();
  }

  _onPicturePress() {
    this.props.selectPicture();
  }

  _onPressFilter(filter) {
    this.props.selectFilter()
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    if(!filter) {
      this.setState({dataSource: ds.cloneWithRows(this.state.movieData)});
      return;
    }

    filter = filter.split(':')[0];

    this.setState({ dataSource: ds.cloneWithRows(
      this.state.movieData.filter(function(movie) {
        if(lodash.includes(movie.nominations.map(function(nom){
          return nom.split(':')[0];
        }), filter)) return movie;
      })
    )});
  }

  expandFilter() {
    this.props.expandFilters()
  }


  render() {

    if(!this.props.loaded) {
      return this.renderLoadingView();
    }

    if(this.props.showMovieInfo) {
      return this.renderMovieInfo()
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderHeader={() => <Header
          expandFilter={this.expandFilter.bind(this)}
          pressFilter={this._onPressFilter.bind(this)}
          {...this.props}
          back={'Clear'}
          onBackPress={() => this._onPressFilter()} />}
        renderRow={(movie) => this.renderMovie(movie)}
        style={styles.listView}/>
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  }

  renderMovieInfo() {
    return (
      <MovieInfo
      {...this.state}
      {...this.props}
      _onPressMovieInfo={() => this._onPressMovieInfo()}
      _onPicturePress={() => this._onPicturePress()}
      _onPressFilter={this._onPressFilter.bind(this)}
      expandFilter={this.expandFilter.bind(this)}/>
      );
  }

  renderMovie(movie) {
    var text = ' Nomination';
    if(movie.nominations.length > 1) text += 's';
    return (
      <View style={styles.container} key={movie.title}>
        <Image
          source={{uri: movie.posters.thumbnail}}
          style={styles.thumbnail}/>
        <TouchableHighlight style={styles.rightContainer} onPress={() => this._onPressMovie(movie)}>
          <View>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.year}>{movie.nominations.length + text}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
