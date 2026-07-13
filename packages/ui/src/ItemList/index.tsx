import { useCallback, useRef } from 'react';
import { FlatList, Platform } from 'react-native';
import type { ListItemData } from '../data/mockData';
import { useListStore } from '../store/useListStore';
import { Row } from './Row';
import { getItemLayout, keyExtractor } from './utils';
import { useVirtualizedReveal } from './useVirtualizedReveal';
import { styles } from './styles';

export function ItemList() {
  const items = useListStore((state) => state.items);
  const removeItem = useListStore((state) => state.removeItem);

  const listRef = useRef<FlatList<ListItemData>>(null);

  const {
    version,
    isScrolling,
    isRevealed,
    isPromoted,
    onScroll,
    onScrollBeginDrag,
    onMomentumScrollBegin,
    onScrollSettle,
    onLayout,
  } = useVirtualizedReveal(items);

  const renderItem = useCallback(
    ({ item }: { item: ListItemData }) => (
      <Row
        item={item}
        onDelete={removeItem}
        revealed={isRevealed(item.id)}
        swipeEnabled={isPromoted(item.id) && !isScrolling}
      />
    ),
    [removeItem, isScrolling, isRevealed, isPromoted]
  );

  return (
    <FlatList
      ref={listRef}
      style={styles.list}
      data={items}
      extraData={version}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      onLayout={onLayout}
      onScroll={onScroll}
      onScrollBeginDrag={onScrollBeginDrag}
      onMomentumScrollBegin={onMomentumScrollBegin}
      onMomentumScrollEnd={onScrollSettle}
      onScrollEndDrag={onScrollSettle}
      scrollEventThrottle={32}
      decelerationRate={Platform.OS === 'android' ? 0.6 : 'fast'}
      getItemLayout={getItemLayout}
      initialNumToRender={12}
      maxToRenderPerBatch={10}
      windowSize={15}
      removeClippedSubviews
    />
  );
}
