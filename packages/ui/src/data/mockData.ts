export interface ListItemData {
  id: string;
  name: string;
  text: string;
  color: string;
  avatarUrl?: string;
}

const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

export const MOCK_DATA: ListItemData[] = [
  {
    id: '1',
    name: 'Lorem',
    text: LOREM,
    color: '#3b82f6',
    avatarUrl: 'https://i.pravatar.cc/150?u=1',
  },
  {
    id: '2',
    name: 'Dolor',
    text: LOREM,
    color: '#10b981',
  },
  {
    id: '3',
    name: 'Amet',
    text: LOREM,
    color: '#f59e0b',
    avatarUrl: 'https://i.pravatar.cc/150?u=3',
  },
  {
    id: '4',
    name: 'Consectetur',
    text: LOREM,
    color: '#8b5cf6',
  },
  {
    id: '5',
    name: 'Tempor',
    text: LOREM,
    color: '#ef4444',
    avatarUrl: 'https://i.pravatar.cc/150?u=5',
  },
];
