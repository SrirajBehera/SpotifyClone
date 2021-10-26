import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	image: {
		width: 200,
		height: 200,
		margin: 15,
	},
	title: {
		color: 'white',
		fontSize: 28,
		fontWeight: 'bold',
	},
	creatorContainer: {
		flexDirection: 'row',
		marginBottom: 10,
	},
	creator: {
		color: 'lightgrey',
		margin: 5,
		fontSize: 18
	},
	numberOfLikes: {
		color: 'lightgrey',
		margin: 5,
		fontSize: 18
	},
	button: {
		backgroundColor: '#1DB954',
		height: 50,
		width: 150,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonText: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
	},
})

export default styles;