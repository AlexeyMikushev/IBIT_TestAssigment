import { useCallback, useReducer, useRef, useState } from 'react';
import type { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import type { ListItemData } from '../data/mockData';
import { ROW_HEIGHT } from '../components/ListItem/constants';
import {
  MAX_PROMOTED,
  MAX_REVEALED,
  NEAR_BUFFER_ROWS,
} from '../components/ItemList/constants';
import { remember } from '../components/ItemList/utils';

export function useVirtualizedReveal(items: ListItemData[]) {
  const [isScrolling, setIsScrolling] = useState(false);
  const [version, bumpVersion] = useReducer((n: number) => n + 1, 0);

  const revealedRef = useRef<Map<string, true>>(new Map());
  const promotedRef = useRef<Map<string, true>>(new Map());
  const isScrollingRef = useRef(false);
  const lastOffsetRef = useRef(0);
  const viewportHeightRef = useRef(0);

  const updateRanges = useCallback(
    (offset: number, scrolling: boolean) => {
      const viewportHeight = viewportHeightRef.current;
      const firstVisible = Math.max(0, Math.floor(offset / ROW_HEIGHT));
      const visibleCount = Math.max(1, Math.ceil(viewportHeight / ROW_HEIGHT));
      const lastVisible = firstVisible + visibleCount;
      const nearStart = Math.max(0, firstVisible - NEAR_BUFFER_ROWS);
      const nearEnd = Math.min(
        items.length - 1,
        lastVisible + NEAR_BUFFER_ROWS
      );

      let changed = false;

      for (let i = nearStart; i <= nearEnd; i++) {
        const item = items[i];
        if (!item) continue;
        const result = remember(revealedRef.current, item.id, MAX_REVEALED);
        if (result.added) changed = true;
        if (result.evicted) {
          promotedRef.current.delete(result.evicted);
        }
      }

      if (!scrolling) {
        const promoteEnd = Math.min(items.length - 1, lastVisible);
        for (let i = firstVisible; i <= promoteEnd; i++) {
          const item = items[i];
          if (!item) continue;
          const result = remember(promotedRef.current, item.id, MAX_PROMOTED);
          if (result.added) changed = true;
        }
      }

      if (changed) {
        bumpVersion();
      }
    },
    [items]
  );

  const setScrolling = useCallback((value: boolean) => {
    isScrollingRef.current = value;
    setIsScrolling((prev) => (prev === value ? prev : value));
  }, []);

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offset = event.nativeEvent.contentOffset.y;
      lastOffsetRef.current = offset;
      updateRanges(offset, isScrollingRef.current);
    },
    [updateRanges]
  );

  const onScrollBeginDrag = useCallback(() => {
    setScrolling(true);
  }, [setScrolling]);

  const onMomentumScrollBegin = useCallback(() => {
    setScrolling(true);
  }, [setScrolling]);

  const onScrollSettle = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offset = event.nativeEvent.contentOffset.y;
      lastOffsetRef.current = offset;
      setScrolling(false);
      updateRanges(offset, false);
    },
    [setScrolling, updateRanges]
  );

  const onLayout = useCallback(
    (event: { nativeEvent: { layout: { height: number } } }) => {
      viewportHeightRef.current = event.nativeEvent.layout.height;
      updateRanges(lastOffsetRef.current, isScrollingRef.current);
    },
    [updateRanges]
  );

  const isRevealed = useCallback(
    (id: string) => revealedRef.current.has(id),
    []
  );

  const isPromoted = useCallback(
    (id: string) => promotedRef.current.has(id),
    []
  );

  return {
    version,
    isScrolling,
    isRevealed,
    isPromoted,
    onScroll,
    onScrollBeginDrag,
    onMomentumScrollBegin,
    onScrollSettle,
    onLayout,
  };
}
