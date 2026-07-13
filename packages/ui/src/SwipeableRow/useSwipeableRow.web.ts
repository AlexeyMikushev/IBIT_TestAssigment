import { useEffect, useRef, useState } from 'react';
import type { ComponentRef, RefObject } from 'react';
import type { PointerEvent, View as RNView, ViewStyle } from 'react-native';

type RNViewRef = ComponentRef<typeof RNView>;
import { ROW_HEIGHT } from '../ListItem/constants';
import {
  SWIPE_THRESHOLD,
  SWIPE_DURATION,
  COLLAPSE_DURATION,
  SWIPE_EASING_BEZIER,
} from './constants';

const EASING = `cubic-bezier(${SWIPE_EASING_BEZIER.join(', ')})`;

type Phase = 'idle' | 'dragging' | 'settling' | 'collapsing';

type WebOnlyViewStyle = {
  transitionProperty?: string;
  transitionDuration?: string;
  transitionTimingFunction?: string;
  touchAction?: string;
  userSelect?: string;
};

type UseSwipeableRowParams = {
  onDelete: () => void;
  interactive: boolean;
};

function transitionStyle(property: string, duration: number): WebOnlyViewStyle {
  return {
    transitionProperty: property,
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: EASING,
  };
}

function asHTMLElement(ref: RefObject<RNViewRef | null>) {
  return ref.current as unknown as HTMLElement | null;
}

export function useSwipeableRow({
  onDelete,
  interactive,
}: UseSwipeableRowParams) {
  const [translateX, setTranslateX] = useState(0);
  const [phase, setPhase] = useState<Phase>('idle');

  const translateXRef = useRef(0);
  const dragStartXRef = useRef(0);
  const exceededThresholdRef = useRef(false);
  const foregroundRef = useRef<RNViewRef>(null);
  const wrapperRef = useRef<RNViewRef>(null);

  const updateTranslateX = (value: number) => {
    translateXRef.current = value;
    setTranslateX(value);
  };

  const handlePointerDown = (event: PointerEvent) => {
    if (!interactive) return;
    if (typeof event.currentTarget === 'number') return;
    event.currentTarget.setPointerCapture(event.nativeEvent.pointerId);
    dragStartXRef.current = event.nativeEvent.clientX - translateX;
    setPhase('dragging');
  };

  const handlePointerMove = (event: PointerEvent) => {
    if (phase !== 'dragging') return;
    updateTranslateX(event.nativeEvent.clientX - dragStartXRef.current);
  };

  const handlePointerUp = () => {
    if (phase !== 'dragging') return;
    setPhase('settling');
    requestAnimationFrame(() => {
      exceededThresholdRef.current =
        Math.abs(translateXRef.current) > SWIPE_THRESHOLD;
      updateTranslateX(
        exceededThresholdRef.current
          ? Math.sign(translateXRef.current) * window.innerWidth
          : 0
      );
    });
  };

  useEffect(() => {
    const node = asHTMLElement(foregroundRef);
    if (!node) return;
    const handleSwipeTransitionEnd = (event: TransitionEvent) => {
      if (event.propertyName !== 'transform') return;
      setPhase(exceededThresholdRef.current ? 'collapsing' : 'idle');
    };
    node.addEventListener('transitionend', handleSwipeTransitionEnd);
    return () =>
      node.removeEventListener('transitionend', handleSwipeTransitionEnd);
  }, []);

  useEffect(() => {
    if (phase !== 'collapsing') return;
    const node = asHTMLElement(wrapperRef);
    if (!node) return;
    const handleCollapseTransitionEnd = (event: TransitionEvent) => {
      if (event.propertyName !== 'height') return;
      onDelete();
    };
    node.addEventListener('transitionend', handleCollapseTransitionEnd);
    return () =>
      node.removeEventListener('transitionend', handleCollapseTransitionEnd);
  }, [phase, onDelete]);

  const backgroundOpacity =
    0.5 + Math.min(Math.abs(translateX) / SWIPE_THRESHOLD, 1) * 0.5;

  const wrapperStyle = {
    height: phase === 'collapsing' ? 0 : ROW_HEIGHT,
    opacity: phase === 'collapsing' ? 0 : 1,
    ...transitionStyle('height, opacity', COLLAPSE_DURATION),
  } satisfies ViewStyle & WebOnlyViewStyle;

  const backgroundStyle: ViewStyle = { opacity: backgroundOpacity };

  const foregroundStyle = {
    transform: [{ translateX }],
    ...transitionStyle(
      phase === 'dragging' ? 'none' : 'transform',
      SWIPE_DURATION
    ),
    touchAction: 'pan-y',
    userSelect: 'none',
  } satisfies ViewStyle & WebOnlyViewStyle;

  return {
    wrapperRef,
    foregroundRef,
    wrapperStyle,
    backgroundStyle,
    foregroundStyle,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
  };
}
