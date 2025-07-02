// FolderTree.tsx
import React, { useState } from "react";
import { folders } from "./foldersData";
import { buildTree } from "./buildTree";

type FolderNode = {
  id: number;
  name: string;
  parentId: number | null;
  children: FolderNode[];
};

const TreeNode: React.FC<{ node: FolderNode }> = ({ node }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{ marginLeft: 16 }}>
      <div
        onClick={() => setExpanded(!expanded)}
        style={{ cursor: "pointer", fontWeight: "bold" }}
      >
        {node.children.length > 0 ? (expanded ? "📂" : "📁") : "📄"} {node.name}
      </div>
      {expanded &&
        node.children.map(child => (
          <TreeNode key={child.id} node={child} />
        ))}
    </div>
  );
};

export const FolderTree: React.FC = () => {
  const tree = buildTree(folders);

  return (
    <div>
      <h2>📁 Folder Tree</h2>
      {tree.map(node => (
        <TreeNode key={node.id} node={node} />
      ))}
    </div>
  );
};
