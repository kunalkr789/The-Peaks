import React from "react";

interface ISortProps {
  onChange: (sortBy: string) => void;
}
function SortAndFilter({ onChange }: ISortProps) {
  return (
    <select
      style={{
        borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
        borderLeft: "none",
        borderRight: "none",
        borderTop: "none",
        width: "12vw",
        marginLeft: "10px",
      }}
      defaultValue="new"
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="new">Newwest First</option>
      <option value="old">Oldest First</option>
    </select>
  );
}

export default SortAndFilter;
