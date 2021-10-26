import React from 'react'
import { View, Text, Image } from 'react-native';
import { SongType } from '../../types';
import styles from './styles';

export type SongListItemProps = {
	song: SongType,
}

const SongListItem = (props: SongListItemProps) => {
	return (
		<View style={styles.container}>
			{/* Image cover */}
			<Image source={{ uri: props.song.imageUri }} style={styles.image} />
			<View style={styles.rightContainer}>
				{/* title */}
				<Text style={styles.title}>{props.song.title}</Text>
				{/* artist */}
				<Text style={styles.artist}>{props.song.artist}</Text>
			</View>
		</View>
	)
}

export default SongListItem;
