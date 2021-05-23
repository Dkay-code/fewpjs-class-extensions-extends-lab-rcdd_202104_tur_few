class Polygon {
  constructor(arr){
    this.arr = arr;
  }

get countSides() {
  return this.arr.length;
}

get perimeter(){
  return this.arr.reduce((acc, curr) => acc + curr, 0);
}
}
