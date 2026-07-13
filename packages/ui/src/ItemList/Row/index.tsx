import { memo } from 'react';
import type { ListItemData } from '../../data/mockData';
import { ListItem } from '../../ListItem';
import { RowSkeleton } from '../../RowSkeleton';
import { SwipeableRow } from '../../SwipeableRow';

type Props = {
  item: ListItemData;
  onDelete: (id: string) => void;
  revealed: boolean;
  promoted: boolean;
  interactive: boolean;
};

function RowComponent({
  item,
  onDelete,
  revealed,
  promoted,
  interactive,
}: Props) {
  if (!revealed) {
    return <RowSkeleton />;
  }

  const handleDelete = () => onDelete(item.id);
  return (
    <SwipeableRow onDelete={handleDelete} interactive={promoted && interactive}>
      <ListItem item={item} />
    </SwipeableRow>
  );
}

export const Row = memo(RowComponent);
