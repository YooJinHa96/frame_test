import objectStore from "../store/objectStore";

import { observer } from "mobx-react";

const Model = observer(() => {
  const { objects } = objectStore;
  console.log(objects);
  return (
    <group>
      {objects.map((obj, index) => {
        return <primitive key={index} object={obj} />;
      })}
    </group>
  );
});
export default Model;
