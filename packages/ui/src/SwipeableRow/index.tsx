import type { ReactNode } from 'react';
import { Text } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { styles } from './styles';
import { useSwipeableRow } from './useSwipeableRow.native';
import { DeleteIcon } from '../DeleteIcon';
import { DELETE_LABEL } from './constants';

type Props = {
  children: ReactNode;
  onDelete: () => void;
};

export function SwipeableRow({ children, onDelete }: Props) {
  const {
    pan,
    wrapperStyle,
    foregroundStyle,
    leftActionStyle,
    rightActionStyle,
    handleLayout,
  } = useSwipeableRow({ onDelete });

  return (
    <Animated.View
      style={[styles.wrapper, wrapperStyle]}
      onLayout={handleLayout}
    >
      <Animated.View style={styles.background}>
        <Animated.View style={[styles.actionContent, leftActionStyle]}>
          <DeleteIcon />
          <Text style={styles.actionText}>{DELETE_LABEL}</Text>
        </Animated.View>
        <Animated.View style={[styles.actionContent, rightActionStyle]}>
          <Text style={styles.actionText}>{DELETE_LABEL}</Text>
          <DeleteIcon />
        </Animated.View>
      </Animated.View>
      <GestureDetector gesture={pan}>
        <Animated.View style={foregroundStyle}>{children}</Animated.View>
      </GestureDetector>
    </Animated.View>
  );
}
