import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: 'black',
		position: 'absolute',
		bottom: 49,
		width: '100%',
	},
	rightContainer: {
    flex: 1,
    flexDirection: 'row',
		marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
	},
  leftContainer: {
    flexDirection: 'row'
  },
  iconContainer: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-around',
  },
	image: {
		width: 75,
		height: 75,
	},
	title: {
		color: 'white',
		fontSize: 16,
    fontWeight: 'bold',
	},
	artist: {
		color: 'grey',
		fontSize: 16,
    marginLeft: 10,
	}
})

export default styles;