import React, { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: 'grey',
    paddingTop: 20,
    height: 60,
  },
  filter: {
    flex: 1,
    flexDirection: 'column',
  },
  headingText: {
    fontSize: 20,
  },
  filterText: {
    flex: 2,
    flexDirection: 'column',
  },
  big: {
    height: 1000,
  },
  expanded: {
    backgroundColor: 'grey',
  },
});
