import { useState } from 'react';
import { View, Image, Text } from 'react-native';
import { getInitials } from './getInitials';
import { styles } from './styles';

type Props = {
  name: string;
  color: string;
  uri?: string;
  size?: number;
};

export function Avatar({ name, color, uri, size = 48 }: Props) {
  const [errored, setErrored] = useState(false);

  const handleError = () => {
    setErrored(true);
  };

  const dimension = {
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  const fontSize = size * 0.4;

  const showImage = !!uri && !errored;

  return showImage ? (
    <Image
      source={{ uri }}
      style={[styles.image, dimension]}
      onError={handleError}
    />
  ) : (
    <View style={[styles.fallback, dimension, { backgroundColor: color }]}>
      <Text style={[styles.initials, { fontSize }]}>{getInitials(name)}</Text>
    </View>
  );
}
