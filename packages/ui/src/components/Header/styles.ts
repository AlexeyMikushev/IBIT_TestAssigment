import { createStyles } from '../../theme';

export const useStyles = createStyles((theme) => ({
  header: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: theme.colorWhite,
    borderBottomWidth: 1,
    borderBottomColor: theme.colorBorder,
  },
  title: {
    fontFamily: theme.fontFamilyLight,
    fontSize: theme.fontSizeLg,
    color: theme.colorTextPrimary,
  },
  subtitle: {
    fontFamily: theme.fontFamilyLight,
    fontSize: theme.fontSizeSm,
    color: theme.colorTextSecondary,
    marginTop: 2,
  },
}));
