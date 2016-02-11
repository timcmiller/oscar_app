import React,
{
  Component,
  ListView,
  Text,
  View,
} from 'react-native';

let styles = require('../styles/nominations_styles');

module.exports = class Nominations extends React.Component{

  render() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return (
      <ListView
        dataSource={ds.cloneWithRows(this.props.movie.nominations)}
        renderRow={(row) => <Text style={styles.title} onPress={() => this.props._onPressFilter(row)}>Best {row}</Text>}/>
    );
  }
}

