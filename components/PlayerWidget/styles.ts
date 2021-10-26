import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		// margin: 15,
		backgroundColor: 'black',
		position: 'absolute',
		bottom: 49,
		width: '100%',
	},
	rightContainer: {
		justifyContent: 'space-evenly',
		marginLeft: 15,
	},
	image: {
		width: 75,
		height: 75,
	},
	title: {
		color: 'white',
		fontSize: 20,
	},
	artist: {
		color: 'grey',
		fontSize: 16,
	}
})

export default styles;