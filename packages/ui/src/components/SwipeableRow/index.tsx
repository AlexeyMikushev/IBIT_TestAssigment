import type { ReactNode } from 'react';
import { Text } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { useStyles } from './styles';
import { useSwipeableRow } from '../../hooks/useSwipeableRow.native';
import { DeleteIcon } from '../DeleteIcon';
import { DELETE_LABEL } from './constants';

type Props = {
  children: ReactNode;
  onDelete: () => void;
  interactive?: boolean;
};

export function SwipeableRow({
  children,
  onDelete,
  interactive = true,
}: Props) {
  const styles = useStyles();
  const {
    pan,
    wrapperStyle,
    backgroundStyle,
    foregroundStyle,
    leftActionStyle,
    rightActionStyle,
  } = useSwipeableRow({ onDelete, interactive });

  return (
    <Animated.View style={[styles.wrapper, wrapperStyle]}>
      {interactive && (
        <Animated.View style={[styles.background, backgroundStyle]}>
          <Animated.View style={[styles.actionContent, leftActionStyle]}>
            <DeleteIcon />
            <Text style={styles.actionText}>{DELETE_LABEL}</Text>
          </Animated.View>
          <Animated.View style={[styles.actionContent, rightActionStyle]}>
            <Text style={styles.actionText}>{DELETE_LABEL}</Text>
            <DeleteIcon />
          </Animated.View>
        </Animated.View>
      )}
      <GestureDetector gesture={pan}>
        <Animated.View style={foregroundStyle}>{children}</Animated.View>
      </GestureDetector>
    </Animated.View>
  );
}
