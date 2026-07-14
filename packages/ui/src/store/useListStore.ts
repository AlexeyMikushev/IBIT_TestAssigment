import { create } from 'zustand';
import { generateMockData } from '../data/mockData';
import type { ListItemData } from '../data/mockData';

const ITEM_COUNT = 1000;

type ListState = {
  items: ListItemData[];
  removeItem: (id: string) => void;
  reset: () => void;
};

export const useListStore = create<ListState>((set) => ({
  items: generateMockData(ITEM_COUNT),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
  reset: () => set({ items: generateMockData(ITEM_COUNT) }),
}));
