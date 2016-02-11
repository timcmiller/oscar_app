'use strict';

let React = require('react-native');
let {
  Component,
  ListView,
  Text,
  View,
  StyleSheet,
} = React;

class Nominations extends React.Component{

  render() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return (
      <ListView
        dataSource={ds.cloneWithRows(this.props.movie.nominations)}
        renderRow={(row) => <Text style={styles.title} onPress={() => this.props._onPressFilter(row)}>Best {row}</Text>}/>
    );
  }
}

var styles = StyleSheet.create({
  title: {
    fontSize: 18,
    textAlign: 'center',
  },
});


module.exports = Nominations;
