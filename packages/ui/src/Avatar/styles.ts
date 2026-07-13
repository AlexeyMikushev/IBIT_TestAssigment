import { StyleSheet } from 'react-native';
import { FONT_LIGHT } from '../typography';

export const styles = StyleSheet.create({
  imageContainer: {
    overflow: 'hidden',
  },
  image: {
    position: 'absolute',
  },
  hidden: {
    opacity: 0,
  },
  skeleton: {
    position: 'absolute',
    backgroundColor: '#e5e7eb',
  },
  fallback: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    color: '#ffffff',
    fontFamily: FONT_LIGHT,
  },
});
