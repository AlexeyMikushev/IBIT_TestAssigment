import { useState } from 'react';
import { View, Image, Text } from 'react-native';
import { getInitials } from './getInitials';
import { styles } from './styles';

const loadedUris = new Set<string>();

type Props = {
  name: string;
  color: string;
  uri?: string;
  size?: number;
};

export function Avatar({ name, color, uri, size = 48 }: Props) {
  const [errored, setErrored] = useState(false);
  const [loaded, setLoaded] = useState(() => !!uri && loadedUris.has(uri));

  const handleError = () => {
    setErrored(true);
  };

  const handleLoad = () => {
    if (uri) {
      loadedUris.add(uri);
    }
    setLoaded(true);
  };

  const dimension = {
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  const fontSize = size * 0.4;

  const showImage = !!uri && !errored;

  if (showImage) {
    return (
      <View style={[styles.imageContainer, dimension]}>
        <Image
          source={{ uri }}
          style={[styles.image, dimension, !loaded && styles.hidden]}
          fadeDuration={0}
          onLoad={handleLoad}
          onError={handleError}
        />
        {!loaded && <View style={[styles.skeleton, dimension]} />}
      </View>
    );
  }

  return (
    <View style={[styles.fallback, dimension, { backgroundColor: color }]}>
      <Text style={[styles.initials, { fontSize }]}>{getInitials(name)}</Text>
    </View>
  );
}
