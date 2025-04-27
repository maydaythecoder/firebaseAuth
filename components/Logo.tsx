import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Images } from '@/config';

export const Logo = ({ uri }: { uri: string }) => {
  return <Image source={{ uri }} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200
  }
});
