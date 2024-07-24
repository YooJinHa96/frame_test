import styled from "styled-components";

const IframePage = () => {
  return (
    <Wrapper>
      <iframe
        src="https://www.tmaxmetaai.com/product"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      ></iframe>
      <Button>test</Button>
    </Wrapper>
  );
};
export default IframePage;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: red;
`;
const Button = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: red;
`;
