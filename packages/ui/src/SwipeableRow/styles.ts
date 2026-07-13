import { StyleSheet } from 'react-native';
import { createStyles } from '../theme';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    overflow: 'hidden',
  },
  background: {
    ...StyleSheet.absoluteFill,
    backgroundColor: theme.colorDanger,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  actionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  actionText: {
    color: theme.colorWhite,
    fontFamily: theme.fontFamilyBold,
    fontSize: theme.fontSizeBase,
  },
  inactiveTint: {
    ...StyleSheet.absoluteFill,
    backgroundColor: theme.colorOverlay,
  },
}));
