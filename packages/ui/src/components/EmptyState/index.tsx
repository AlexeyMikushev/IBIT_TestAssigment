import { View, Text, Pressable } from 'react-native';
import { InboxIcon } from '../InboxIcon';
import { EMPTY_TITLE, EMPTY_TEXT, RESET_LABEL } from './constants';
import { useStyles } from './styles';

type Props = {
  onReset: () => void;
};

export function EmptyState({ onReset }: Props) {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <InboxIcon />
      <Text style={styles.title}>{EMPTY_TITLE}</Text>
      <Text style={styles.text}>{EMPTY_TEXT}</Text>
      <Pressable
        onPress={onReset}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.buttonText}>{RESET_LABEL}</Text>
      </Pressable>
    </View>
  );
}
