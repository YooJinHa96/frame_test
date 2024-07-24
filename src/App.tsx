import { useState } from "react";

import styled from "styled-components";
import Scene from "./three-components/scene";
import IframePage from "./components/iframePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Wrapper>
      <Scene />
      <IframePage />
    </Wrapper>
  );
}

export default App;
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
