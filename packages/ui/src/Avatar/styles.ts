import { createStyles } from '../theme';

export const useStyles = createStyles((theme) => ({
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
    backgroundColor: theme.colorSkeleton,
  },
  fallback: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    color: theme.colorWhite,
    fontFamily: theme.fontFamilyLight,
  },
}));
