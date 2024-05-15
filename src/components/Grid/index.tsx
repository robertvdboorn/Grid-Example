import { UniformSlot } from "@uniformdev/canvas-react";

const Grid = ({ title }: { title: string }) => {
  return (
    <div>
      <h2 className="text-xl p-4">{title}</h2>
      <div className="grid grid-cols-3 gap-4 m-4 p-4">
        <UniformSlot name="elements" />
      </div>
    </div>
  );
};

export default Grid;
