import { StyleSheet } from 'react-native';
import { FONT_LIGHT } from '../typography';

export const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  title: {
    fontFamily: FONT_LIGHT,
    fontSize: 24,
    color: '#111827',
  },
  subtitle: {
    fontFamily: FONT_LIGHT,
    fontSize: 14,
    color: '#6b7280',
    marginTop: 2,
  },
});
