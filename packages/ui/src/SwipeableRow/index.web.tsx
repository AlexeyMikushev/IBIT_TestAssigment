import type { ReactNode } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { useSwipeableRow } from './useSwipeableRow.web';
import { DeleteIcon } from '../DeleteIcon';
import { DELETE_LABEL } from './constants';

type Props = {
  children: ReactNode;
  onDelete: () => void;
};

export function SwipeableRow({ children, onDelete }: Props) {
  const {
    wrapperRef,
    foregroundRef,
    wrapperStyle,
    backgroundStyle,
    foregroundStyle,
    handleLayout,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
  } = useSwipeableRow({ onDelete });

  return (
    <View
      ref={wrapperRef}
      style={[styles.wrapper, wrapperStyle]}
      onLayout={handleLayout}
    >
      <View style={[styles.background, backgroundStyle]}>
        <View style={styles.actionContent}>
          <DeleteIcon />
          <Text style={styles.actionText}>{DELETE_LABEL}</Text>
        </View>
        <View style={styles.actionContent}>
          <Text style={styles.actionText}>{DELETE_LABEL}</Text>
          <DeleteIcon />
        </View>
      </View>
      <View
        ref={foregroundRef}
        style={foregroundStyle}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {children}
      </View>
    </View>
  );
}
