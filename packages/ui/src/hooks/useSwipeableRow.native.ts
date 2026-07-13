import { useWindowDimensions } from 'react-native';
import {
  usePanGesture,
  type PanGestureActiveEvent,
} from 'react-native-gesture-handler';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  interpolate,
  Extrapolation,
  Easing,
  type SharedValue,
} from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';
import { ROW_HEIGHT } from '../components/ListItem/constants';
import {
  SWIPE_THRESHOLD,
  SWIPE_DURATION,
  COLLAPSE_DURATION,
  SWIPE_EASING_BEZIER,
} from '../components/SwipeableRow/constants';

const swipeEasing = Easing.bezier(...SWIPE_EASING_BEZIER);

type UseSwipeableRowParams = {
  onDelete: () => void;
  interactive: boolean;
};

function useActionStyle(translateX: SharedValue<number>, sign: 1 | -1) {
  return useAnimatedStyle(
    () => ({
      opacity: sign * translateX.value > 0 ? 1 : 0,
      transform: [
        {
          scale: interpolate(
            Math.abs(translateX.value),
            [0, SWIPE_THRESHOLD, SWIPE_THRESHOLD + 60],
            [0.6, 1, 1.1],
            Extrapolation.CLAMP
          ),
        },
      ],
    }),
    [translateX]
  );
}

export function useSwipeableRow({
  onDelete,
  interactive,
}: UseSwipeableRowParams) {
  const { width } = useWindowDimensions();
  const translateX = useSharedValue(0);
  const height = useSharedValue(ROW_HEIGHT);

  const handlePanUpdate = (event: PanGestureActiveEvent) => {
    'worklet';
    translateX.value = event.translationX;
  };

  const handlePanDeactivate = (event: PanGestureActiveEvent) => {
    'worklet';
    if (Math.abs(event.translationX) > SWIPE_THRESHOLD) {
      const direction = Math.sign(event.translationX);
      translateX.value = withTiming(
        direction * width,
        { duration: SWIPE_DURATION, easing: swipeEasing },
        (finished) => {
          if (finished) {
            height.value = withTiming(
              0,
              { duration: COLLAPSE_DURATION, easing: swipeEasing },
              (done) => {
                if (done) {
                  scheduleOnRN(onDelete);
                }
              }
            );
          }
        }
      );
    } else {
      translateX.value = withSpring(0);
    }
  };

  const pan = usePanGesture({
    enabled: interactive,
    activeOffsetX: [-10, 10],
    onUpdate: handlePanUpdate,
    onDeactivate: handlePanDeactivate,
  });

  const wrapperStyle = useAnimatedStyle(
    () => ({ height: height.value }),
    [height]
  );

  const foregroundStyle = useAnimatedStyle(
    () => ({ transform: [{ translateX: translateX.value }] }),
    [translateX]
  );

  const leftActionStyle = useActionStyle(translateX, 1);
  const rightActionStyle = useActionStyle(translateX, -1);

  return {
    pan,
    wrapperStyle,
    foregroundStyle,
    leftActionStyle,
    rightActionStyle,
  };
}
