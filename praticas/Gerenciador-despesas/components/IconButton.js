import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function IconButton({ icon, size = 24, color = '#222', onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.button} hitSlop={8}>
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginRight: 12,
    padding: 6,
    borderRadius: 999,
  },
});
