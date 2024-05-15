import { UniformComposition, UniformSlot } from "@uniformdev/canvas-react";
import { RootComponentInstance } from "@uniformdev/canvas";
export { getServerSideProps } from "@uniformdev/canvas-next/route";

import React from "react";
import "../components";

const Page = ({ data }: { data: RootComponentInstance }) => {
  return (
    <UniformComposition data={data}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold m-4 p-4">Grid Examples</h1>
        <div>
          <UniformSlot name="pageContent" />
        </div>
      </div>
    </UniformComposition>
  );
};

export default Page;
