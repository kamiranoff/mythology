import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  imageContainer: {
    height: 300,
  },
  image: {
    resizeMode: 'cover',
    height: 300,
  },
  descriptionContainer: {
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  name: {
    paddingTop: 20,
    paddingHorizontal: 20,
    textAlign: 'center',
    fontSize: 40,
    flex: 1,
    height: 100,
  },
  greekName: {
    fontStyle: 'italic',
    paddingTop: 5,
    paddingBottom: 20,
    textAlign: 'center',
    fontSize: 15,
  },

});

export const htmlStyle = StyleSheet.create({
  p: {
    fontSize: 54,
    backgroundColor:'red',
  }
});
