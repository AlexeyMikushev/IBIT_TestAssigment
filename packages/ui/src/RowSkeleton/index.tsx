import { View } from 'react-native';
import { useStyles } from './styles';

export function RowSkeleton() {
  const styles = useStyles();

  return (
    <View style={styles.row}>
      <View style={styles.avatar} />
      <View style={styles.content}>
        <View style={styles.nameBar} />
        <View style={styles.textBar} />
      </View>
      <View style={styles.inactiveTint} pointerEvents="none" />
    </View>
  );
}
