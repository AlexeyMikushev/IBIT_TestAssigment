import { StyleSheet } from 'react-native';
import { FONT_BOLD, FONT_LIGHT } from '../typography';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  content: {
    flex: 1,
  },
  name: {
    fontFamily: FONT_BOLD,
    fontSize: 16,
    color: '#111827',
    marginBottom: 2,
  },
  text: {
    fontFamily: FONT_LIGHT,
    fontSize: 14,
    color: '#6b7280',
  },
});
