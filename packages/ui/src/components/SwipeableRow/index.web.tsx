import type { ReactNode } from 'react';
import { View, Text } from 'react-native';
import { useStyles } from './styles';
import { useSwipeableRow } from '../../hooks/useSwipeableRow.web';
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
    wrapperRef,
    foregroundRef,
    wrapperStyle,
    backgroundStyle,
    foregroundStyle,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
  } = useSwipeableRow({ onDelete, interactive });

  return (
    <View ref={wrapperRef} style={[styles.wrapper, wrapperStyle]}>
      {interactive && (
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
      )}
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
