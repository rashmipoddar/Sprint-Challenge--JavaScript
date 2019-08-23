// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMake {
  constructor(props) {
    this.length = props.length;
    this.width = props.width;
    this.height = props.height;  
  }
  volume() {
    let volume = this.length * this.width * this.height;
    return volume;
  }
  surfaceArea() {
    let surfaceArea = 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
    return surfaceArea;
  }
}

class CubeMake extends CuboidMake {
  constructor(props) {
    super(props)
  }
  volume() {
    let volume = Math.pow(this.length, 3);
    return `The volume of the cube is ${volume}`;
  }
  surfaceArea() {
    let surfaceArea = 6 * (Math.pow(this.length, 2));
    return `The surface area of the cube is ${surfaceArea}`;
  }
}
// The volume and surface area for a cube is not needed separately in the CubeMake class because cube is just a cuboid with equal sides. It has been created because the stretch goals required that. Because we have created a method in the subclass it will use those methods for computation. If these methods were not defined in the subclass it would have used the baseclass method.


const newCuboid = new CuboidMake({
  length: 4,
  width: 5,
  height: 5
});

const cube = new CubeMake({
  length: 4,
  width: 4,
  height: 4
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(newCuboid.volume()); // 100
console.log(newCuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.\
console.log(cube.volume());
console.log(cube.surfaceArea());