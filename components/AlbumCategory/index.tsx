import React from "react";
import { Text, View, FlatList } from "react-native";
import { AlbumType } from "../../types";
import Album from "../Album";
import styles from "./styles";

export type AlbumCategoryProps = {
	title: string;
	albums: [AlbumType];
}

const AlbumCategory = (props: AlbumCategoryProps) => {
	return (
		<View style={styles.container}>
			{/* Title of the albumCategory */}
			<Text style={styles.title}>{props.title}</Text>
			{/* List of albums */}
			<FlatList
				data={props.albums}
				renderItem={({ item }) => <Album album={item} />}
				keyExtractor={(item) => item.id}
				horizontal
			/>
		</View>
	)
}

export default AlbumCategory;