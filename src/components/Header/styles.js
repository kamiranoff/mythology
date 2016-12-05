import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  viewStyle: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: '#eae4e7',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#9e7c40',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
  },
  textStyle: {
    fontSize: 25,
    color: '#234',
  },
});

export default styles;
