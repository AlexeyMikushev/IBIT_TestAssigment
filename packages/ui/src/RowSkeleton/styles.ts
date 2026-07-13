import { StyleSheet } from 'react-native';
import { ROW_HEIGHT } from '../ListItem/constants';
import { createStyles } from '../theme';

export const useStyles = createStyles((theme) => ({
  row: {
    height: ROW_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 16,
    backgroundColor: theme.colorWhite,
    borderBottomWidth: 1,
    borderBottomColor: theme.colorBorder,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colorSkeleton,
  },
  content: {
    flex: 1,
    gap: 8,
  },
  nameBar: {
    height: 14,
    width: '40%',
    borderRadius: 4,
    backgroundColor: theme.colorSkeleton,
  },
  textBar: {
    height: 12,
    width: '70%',
    borderRadius: 4,
    backgroundColor: theme.colorSkeleton,
  },
  inactiveTint: {
    ...StyleSheet.absoluteFill,
    backgroundColor: theme.colorOverlay,
  },
}));
