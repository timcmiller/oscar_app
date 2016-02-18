import React,
{
  Component,
  Image,
  ListView,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import styles from '../styles/header_styles';
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Header extends Component{

  _onPressFilter() {
    this.props.expandFilter();
  }

  render() {

    if(this.props.showFilter) {
      return this.renderFilterHeader();
    }

    return (
      <View style={styles.header}>
        <Text style={styles.sideText} onPress={() => this.props.onBackPress()}>
          {this.props.back}
        </Text>
        <Text style={styles.headingText}>
          88th Academy Awards
        </Text>
        <TouchableHighlight onPress={() => this._onPressFilter()}>
          <Text>
            + Filter
          </Text>
        </TouchableHighlight>
      </View>
    );
  }

  renderFilterHeader() {
    return (
      <View style={this.props.showFilter && styles.expanded}>
        <View style={styles.header}>
          <Text style={styles.sideText} onPress={() => this.props.onBackPress()}>
            {this.props.back}
          </Text>
          <Text style={styles.headingText}>
            88th Academy Awards
          </Text>
          <View style={styles.big}>
            <TouchableHighlight onPress={() => this._onPressFilter()} style={[styles.filter, styles.sideText]}>
              <Text>
                - Filter
              </Text>
            </TouchableHighlight>
          </View>
        </View>
        <ListView
        dataSource={ds.cloneWithRows(['Picture', 'Director', 'Actor', 'Actress', 'Supporting Actor', 'Supporting Actress', 'Original Screenplay', 'Adapted Screenplay', 'Animated Feature Film', 'Foreign Language Film', 'Documentary - Feature', 'Documentary - Short Subject', 'Live Action Short Film', 'Animated Short Film', 'Original Score', 'Original Song', 'Sound Editing', 'Sound Mixing', 'Production Design', 'Cinematography', 'Makeup and Hairstyling', 'Costume Design', 'Film Editing', 'Visual Effects'])}
        renderRow={(row) => <Text style={[styles.headingText, styles.filterText]} onPress={() => this.props.pressFilter(row)}>{row}</Text>}
        style={styles.listView}/>
      </View>
    );
  }
}
