import { createStyles } from '../../theme';
import { ROW_HEIGHT } from './constants';

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
  content: {
    flex: 1,
  },
  name: {
    fontFamily: theme.fontFamilyBold,
    fontSize: theme.fontSizeMd,
    color: theme.colorTextPrimary,
    marginBottom: 2,
  },
  text: {
    fontFamily: theme.fontFamilyLight,
    fontSize: theme.fontSizeSm,
    color: theme.colorTextSecondary,
  },
}));
