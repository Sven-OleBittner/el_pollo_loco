class CollectibleObject extends DrawableObject {
  offset = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  constructor(world) {
    super();
    this.world = world;
  }

  collectObject() {
    this.y = 5000; // Move the object off-screen after collection
  }
}
