import { makeAutoObservable } from "mobx";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
class ObjectStore {
  objects: THREE.Object3D[] = [];
  constructor() {
    makeAutoObservable(this);
    this.load();
  }
  async load() {
    const loader = new GLTFLoader();
    const abountUs = await loader.loadAsync("/About_Us.glb");

    const Business = await loader.loadAsync("/Business.glb");
    const Contact = await loader.loadAsync("/Contact_Us.glb");
    const MainLand = await loader.loadAsync("/Mainland.glb");
    const Product = await loader.loadAsync("/Product.glb");
    const Service = await loader.loadAsync("/Service.glb");
    const Team = await loader.loadAsync("/Team.glb");
    const VideoTower = await loader.loadAsync("/Video Tower.glb");

    this.objects = [
      abountUs.scene,
      Business.scene,
      Contact.scene,
      MainLand.scene,
      Product.scene,
      Service.scene,
      Team.scene,
      VideoTower.scene,
    ];
    console.log(this.objects);
  }
}
const objectStore = new ObjectStore();
export default objectStore;
