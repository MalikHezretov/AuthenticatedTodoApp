import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    padding: 24,
    paddingBottom: 0,
  },
  titleStyle: {
    fontSize: 28,
  },
  listContainer: {
    flex: 1,
    paddingVertical: 12,
  },
  buttonStyle: {
    width: 100,
    height: 100,
    backgroundColor: '#90EE90',
    borderRadius: 50,
    alignSelf: 'center',
  },
  addButtonContainerStyle: {
    alignItems: 'center',
  },
  todItemStyle: {
    paddingVertical: 24,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    flexDirection: 'row',
  },
  todoTextStyle: {
    fontSize: 18,
  },
  todoFlatListStyle: {
    marginTop: 6,
  },
});

export default styles;
