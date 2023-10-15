import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  inner: {
    paddingHorizontal: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {},
  btnContainer: {
    backgroundColor: '#0096FF',
    marginTop: 12,
    borderRadius: 4,
    bottom: 0,
  },
  createButtonStyle: {
    height: 48,
    backgroundColor: '#0096FF',
    borderRadius: 12,
    justifyContent: 'center',
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  createButtonTextStyle: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default styles;
