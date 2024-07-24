const Light = () => {
  return (
    <>
      <ambientLight intensity={1.5} color={"#fff"} />
      <directionalLight
        castShadow
        shadow-bias={-0.0001}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        intensity={2.5}
        color={"#fff"}
        position={[-10, 18, 11.5]}
        visible={true}
        shadow-camera-left={-30}
        shadow-camera-right={30}
        shadow-camera-top={30}
        shadow-camera-bottom={-30}
      />
    </>
  );
};
export default Light;
