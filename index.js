class Polygon {
  constructor(arr){
    this.arr = arr;
  }

get countSides() {
  return this.side.length;
}

get perimeter(){
  return this.side.reduce((acc, curr) => acc + curr, 0);
}
}
