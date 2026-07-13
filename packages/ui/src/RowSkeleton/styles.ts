import { StyleSheet } from 'react-native';
import { ROW_HEIGHT } from '../ListItem/constants';

export const styles = StyleSheet.create({
  row: {
    height: ROW_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#e5e7eb',
  },
  content: {
    flex: 1,
    gap: 8,
  },
  nameBar: {
    height: 14,
    width: '40%',
    borderRadius: 4,
    backgroundColor: '#e5e7eb',
  },
  textBar: {
    height: 12,
    width: '70%',
    borderRadius: 4,
    backgroundColor: '#e5e7eb',
  },
  inactiveTint: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(15, 23, 42, 0.035)',
  },
});
