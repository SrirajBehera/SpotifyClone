import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import AlbumDetails from '../data/AlbumDetails';
import SongListItem from '../components/SongListItem';
import AlbumHeader from '../components/AlbumHeader';

const AlbumScreen = () => {

	const route = useRoute();

	useEffect(() => {
		console.log(route)
	}, [])

	return (
		<View>
			<FlatList
				data={AlbumDetails.songs}
				renderItem={({ item }) => <SongListItem song={item} />}
				keyExtractor={(item) => item.id}
				ListHeaderComponent={() => <AlbumHeader album={AlbumDetails} />}
			/>
		</View>
	)
}

export default AlbumScreen;