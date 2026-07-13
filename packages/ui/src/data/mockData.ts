export interface ListItemData {
  id: string;
  name: string;
  text: string;
  color: string;
  avatarUrl?: string;
}

const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

const LOREM_WORDS = Array.from(
  new Set(
    'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure in reprehenderit voluptate velit esse cillum eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum'.split(
      ' '
    )
  )
);

const COLORS = [
  '#3b82f6',
  '#10b981',
  '#f59e0b',
  '#8b5cf6',
  '#ef4444',
  '#ec4899',
  '#14b8a6',
  '#f97316',
];

function pick<T>(list: readonly T[], index: number): T {
  return list[index % list.length]!;
}

function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function randomWord(): string {
  const index = Math.floor(Math.random() * LOREM_WORDS.length);
  return capitalize(pick(LOREM_WORDS, index));
}

export function generateMockData(count: number): ListItemData[] {
  const items: ListItemData[] = [];

  for (let i = 0; i < count; i++) {
    const firstName = randomWord();
    const lastName = randomWord();
    const color = pick(COLORS, i);

    const bucket = i % 10;
    let avatarUrl: string | undefined;
    if (bucket < 3) {
      avatarUrl = `https://i.pravatar.cc/150?u=${i}`;
    } else if (bucket < 4) {
      avatarUrl = `https://broken.invalid/${i}.png`;
    }

    items.push({
      id: String(i + 1),
      name: `${firstName} ${lastName}`,
      text: LOREM,
      color,
      avatarUrl,
    });
  }

  return items;
}
