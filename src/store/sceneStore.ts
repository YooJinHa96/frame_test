import { makeAutoObservable } from "mobx";
import * as Three from "three";
class SceneStore {
  scene: Three.Scene | null = null;
  camera: Three.PerspectiveCamera | null = null;
  renderer: Three.WebGLRenderer | null = null;
  constructor() {
    makeAutoObservable(this);
  }
  setCamera(camera: Three.PerspectiveCamera) {
    this.camera = camera;
  }
  setScene(scene: Three.Scene) {
    this.scene = scene;
  }
}
const sceneStore = new SceneStore();
export default sceneStore;
