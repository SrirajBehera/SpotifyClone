import React from 'react'
import { View, Text, Image } from 'react-native';
import styles from './styles';

const song = {
	id: '1',
	imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
	title: 'High on you',
	artist: 'Taylor Swift'
}

const PlayerWidget = () => {
	return (
		<View style={styles.container}>
			{/* Image cover */}
			<Image source={{ uri: song.imageUri }} style={styles.image} />
			<View style={styles.rightContainer}>
				{/* title */}
				<Text style={styles.title}>{song.title}</Text>
				{/* artist */}
				<Text style={styles.artist}>{song.artist}</Text>
			</View>
		</View>
	)
}

export default PlayerWidget;
