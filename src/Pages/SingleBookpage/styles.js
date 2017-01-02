import { StyleSheet } from 'react-native';
import { TEXT_5 } from '../../constants/styles';

export default StyleSheet.create({
  imageContainer: {
    height: 300,
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'contain',
    height: 250,

  },
  descriptionContainer: {
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  title: {
    paddingTop: 20,
    textAlign: 'center',
    fontSize: 40,
  },
  author: {
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 25,
    fontStyle: 'italic',
    color: TEXT_5,
  },
  description: {
    marginBottom: 20,
  },
});
