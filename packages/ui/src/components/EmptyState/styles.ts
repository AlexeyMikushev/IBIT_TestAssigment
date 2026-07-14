import { createStyles } from '../../theme';

export const useStyles = createStyles((theme) => ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
    backgroundColor: theme.colorBackground,
  },
  title: {
    marginTop: 16,
    fontFamily: theme.fontFamilyBold,
    fontSize: theme.fontSizeMd,
    color: theme.colorTextPrimary,
  },
  text: {
    marginTop: 4,
    fontFamily: theme.fontFamilyLight,
    fontSize: theme.fontSizeSm,
    color: theme.colorTextSecondary,
    textAlign: 'center',
  },
  button: {
    marginTop: 24,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: theme.colorAccent,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    fontFamily: theme.fontFamilyBold,
    fontSize: theme.fontSizeBase,
    color: theme.colorWhite,
  },
}));
