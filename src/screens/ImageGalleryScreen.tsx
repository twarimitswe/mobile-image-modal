import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { ImageModal } from '../components/ImageModal';
import { ImageList } from '../components/ImageList';

interface ImageItem {
  id: string;
  uri: string;
}

const sampleImages: ImageItem[] = [
  { id: '1', uri: 'https://picsum.photos/seed/1/300/300' },
  { id: '2', uri: 'https://picsum.photos/seed/2/300/300' },
  { id: '3', uri: 'https://picsum.photos/seed/3/300/300' },
  { id: '4', uri: 'https://picsum.photos/seed/4/300/300' },
];

export default function ImageGalleryScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUri, setSelectedUri] = useState<string>('');

  const handlePress = (uri: string) => {
    setSelectedUri(uri);
    setModalVisible(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Image Gallery</Text>
      <ImageList data={sampleImages} onPressItem={handlePress} />
      <ImageModal visible={modalVisible} imageUri={selectedUri} onClose={() => setModalVisible(false)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 12,
  },
});
