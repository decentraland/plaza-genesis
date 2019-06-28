let plaza = new Entity()

const xPos = 20 * 16 /2;
const zPos = 19 * 16 /2;

plaza.addComponent(new Transform({
  position: new Vector3(xPos,0,zPos)
}))
plaza.addComponent(new GLTFShape("models/plaza-genesis.glb"))
engine.addEntity(plaza)