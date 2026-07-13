import type { ListItemData } from '../data/mockData';
import { ROW_HEIGHT } from '../ListItem/constants';

export function remember(map: Map<string, true>, id: string, limit: number) {
  if (map.has(id)) {
    map.delete(id);
    map.set(id, true);
    return { added: false, evicted: undefined as string | undefined };
  }
  map.set(id, true);
  let evicted: string | undefined;
  if (map.size > limit) {
    const oldest = map.keys().next().value;
    if (oldest !== undefined) {
      map.delete(oldest);
      evicted = oldest;
    }
  }
  return { added: true, evicted };
}

export function keyExtractor(item: ListItemData) {
  return item.id;
}

export function getItemLayout(
  _data: ArrayLike<ListItemData> | null | undefined,
  index: number
) {
  return { length: ROW_HEIGHT, offset: ROW_HEIGHT * index, index };
}
