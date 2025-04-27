import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type IconName = keyof typeof Ionicons.glyphMap;

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
  weight = 'regular',
}: {
  name: string;
  size?: number;
  color: string;
  style?: StyleProp<ViewStyle>;
  weight?: 'regular' | 'bold';
}) {
  // Map SF Symbol names to Ionicons names
  const iconMap: { [key: string]: IconName } = {
    'house.fill': 'home',
    'paperplane.fill': 'paper-plane',
    // Add more mappings as needed
  };

  const iconName = iconMap[name] || 'help-circle';

  return (
    <Ionicons
      name={iconName}
      size={size}
      color={color}
      style={style}
    />
  );
}
