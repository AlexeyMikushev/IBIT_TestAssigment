import { createStyles } from '../theme';

export const useStyles = createStyles((theme) => ({
  outer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colorBorder,
  },
  inner: {
    flex: 1,
    width: '100%',
    maxWidth: 475,
    backgroundColor: theme.colorWhite,
  },
}));
