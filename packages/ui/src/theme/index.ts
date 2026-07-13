import { StyleSheet } from 'react-native';
import { theme as LIGHT_THEME } from './theme';
import type { Theme } from './theme';

export { theme } from './theme';
export type { Theme } from './theme';

export function createTheme<Result>(
  creator: (theme: Theme) => Result
): () => Result {
  let result: Result;

  return function useThemeResult() {
    if (result) {
      return result;
    }

    result = creator(LIGHT_THEME);

    return result;
  };
}

type StyleSheetInput = Parameters<typeof StyleSheet.create>[0];

export function createStyles<T extends StyleSheetInput>(
  creator: (theme: Theme) => T
) {
  return createTheme((theme) => StyleSheet.create(creator(theme)));
}

export const useTheme = createTheme((theme) => theme);
