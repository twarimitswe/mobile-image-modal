import React from 'react';
import { Modal, View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

interface ImageModalProps {
  visible: boolean;
  imageUri: string;
  onClose: () => void;
}

/**
 * A simple reusable image modal that displays a full‑screen image.
 * DRY & KISS: minimal props, no extra dependencies, keeps styling in one place.
 */
export const ImageModal: React.FC<ImageModalProps> = ({ visible, imageUri, onClose }) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.backdrop}>
        <TouchableOpacity style={styles.closeBtn} onPress={onClose} accessibilityLabel="Close image modal">
          <Text style={styles.closeText}>✕</Text>
        </TouchableOpacity>
        <Image source={{ uri: imageUri }} style={styles.image} resizeMode="contain" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: '80%',
  },
  closeBtn: {
    position: 'absolute',
    top: 30,
    right: 30,
    zIndex: 10,
  },
  closeText: {
    fontSize: 28,
    color: '#fff',
  },
});
