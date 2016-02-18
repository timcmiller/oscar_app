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

const REQUEST_URL = 'http://oscarnom-api.herokuapp.com/api/movies';

export default class MainView extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMovies(REQUEST_URL, this.props.dataSource);
  }

  _onPressMovieInfo() {
    this.props.selectMovie();
  }

  _onPressMovie(movie){
    this.props.viewCurrentMovie(movie);
    this.props.selectMovie();
  }

  _onPicturePress() {
    this.props.selectPicture();
  }

  _onPressFilter(filter) {
    this.props.selectFilter()
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    if(!filter) {
      this.props.filterMovies(ds.cloneWithRows(this.props.movieData))
      return;
    }

    filter = filter.split(':')[0];

    this.props.filterMovies(
      ds.cloneWithRows(
        this.props.movieData.filter(function(movie) {
          if(lodash.includes(movie.nominations.map(function(nom) {
            return nom.split(':')[0];
          }), filter)) return movie;
        })), filter);
  }

  expandFilter() {
    this.props.expandFilters()
  }


  render() {

    if(this.props.isFetching) {
      return this.renderLoadingView();
    }

    if(this.props.showMovieInfo) {
      return this.renderMovieInfo()
    }

    return (
      <ListView
        dataSource={this.props.dataSource}
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
