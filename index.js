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

class Triangle extends Polygon {
  get isValid(){
    if(this.arr[0] + this.arr[1] > this.arr[2] && this.arr[1] + this.arr[2] > this.arr[0] && this.sides[0] + this.sides[2] > this.sides[1]) {
        return true;
      } else {
       return false;
     }
   }
}
