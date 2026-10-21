import React from 'react';
import { FlatList, Image, TouchableOpacity, StyleSheet, ListRenderItemInfo } from 'react-native';

interface ImageItem {
  id: string;
  uri: string;
}

interface ImageListProps {
  data: ImageItem[];
  onPressItem: (uri: string) => void;
}

/**
 * Simple DRY FlatList component for displaying a grid of images.
 * KISS: minimal styling, no external libraries.
 */
export const ImageList: React.FC<ImageListProps> = ({ data, onPressItem }) => {
  const renderItem = ({ item }: ListRenderItemInfo<ImageItem>) => (
    <TouchableOpacity onPress={() => onPressItem(item.uri)} style={styles.item} accessibilityLabel="Image item">
      <Image source={{ uri: item.uri }} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  item: {
    flex: 1,
    margin: 5,
    aspectRatio: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});
