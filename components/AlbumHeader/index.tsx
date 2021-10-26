import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import  AlbumDetails  from '../../data/AlbumDetails';
import styles from './styles';

export type AlbumHeaderProps = {
	album: AlbumDetails,
}

const AlbumHeader = (props: AlbumHeaderProps) => {

	const { album } = props;

	return (
		<View style={styles.container}>
			{/* cover Image */}
			<Image source={{ uri: album.imageUri }} style={styles.image} />
			{/* title */}
			<Text style={styles.title}>{album.name}</Text>
			{/* creator	 	 numberOfLikes */}
			<View style={styles.creatorContainer}>
				<Text style={styles.creator}>By {album.by}</Text>
				<Text style={styles.numberOfLikes}>{album.numberOfLikes} Likes</Text>
			</View>
			{/* play button */}
			<TouchableOpacity>
				<View style={styles.button}>
					<Text style={styles.buttonText}>PLAY</Text>
				</View>
			</TouchableOpacity>
		</View>
	)
}

export default AlbumHeader;
