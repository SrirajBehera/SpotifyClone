import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import AlbumCategory from '../components/AlbumCategory';
import AlbumCategories from '../data/AlbumCategories';

import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <FlatList
        data={AlbumCategories}
        renderItem={({ item }) => <AlbumCategory title={item.title} albums={item.albums} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
