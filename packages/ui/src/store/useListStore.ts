import { create } from 'zustand';
import { generateMockData } from '../data/mockData';
import type { ListItemData } from '../data/mockData';

type ListState = {
  items: ListItemData[];
  removeItem: (id: string) => void;
};

export const useListStore = create<ListState>((set) => ({
  items: generateMockData(1000),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
}));
