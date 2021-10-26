import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import { AlbumType } from '../../types';
import { useNavigation } from '@react-navigation/native';

export type AlbumProps = {
	album: AlbumType
}

const Album = (props: AlbumProps) => {

	const navigation = useNavigation();

	const onPress = () => {
		navigation.navigate("AlbumScreen", { id: props.album.id })
	}

	return (
		<TouchableWithoutFeedback
			onPress={onPress}
		>
			<View style={styles.container}>
				{/* Image of the album */}
				<Image source={{ uri: props.album.imageUri }} style={styles.image} />
				{/* Artists Headline */}
				<Text style={styles.text}>{props.album.artistsHeadline}</Text>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default Album;