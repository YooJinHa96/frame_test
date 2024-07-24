import styled from "styled-components";
import Scene from "./three-components/scene";

function App() {
  return (
    <Wrapper>
      <Scene />
    </Wrapper>
  );
}

export default App;
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;
