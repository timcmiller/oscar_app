'use strict';

let React = require('react-native');
let {
  Component,
  ListView,
  Text,
  View,
} = React;

class Nominations extends React.Component{

  render() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return (
      <ListView
        dataSource={ds.cloneWithRows(this.props.movie.nominations)}
        renderRow={(row) => <Text>{row}</Text>}/>
    );
  }
}

module.exports = Nominations;
