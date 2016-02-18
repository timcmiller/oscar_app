import React,
{
  Component,
  ListView,
  Text,
  View,
} from 'react-native';

import styles from '../styles/nominations_styles';

export default class Nominations extends Component{

  render() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return (
      <ListView
        dataSource={ds.cloneWithRows(this.props.currentMovie.nominations)}
        renderRow={(row) => <Text style={styles.title} onPress={() => this.props._onPressFilter(row)}>Best {row}</Text>}/>
    );
  }
}

