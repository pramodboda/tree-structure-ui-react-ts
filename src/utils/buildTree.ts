// buildTree.ts
export function buildTree<T extends { id: number; parentId: number | null }>(
    items: T[]
  ): Array<T & { children: any[] }> {
    const map = new Map<number, T & { children: any[] }>();
    const roots: Array<T & { children: any[] }> = [];
  
    items.forEach(item => map.set(item.id, { ...item, children: [] }));
  
    items.forEach(item => {
      const node = map.get(item.id)!;
      if (item.parentId === null) {
        roots.push(node);
      } else {
        map.get(item.parentId)?.children.push(node);
      }
    });
  
    return roots;
  }
  