'use strict';

{
  const rectangle = {
    width: 5,
    height: 5,
    set setWidth(num) {
      if (num > 0) this.width = num;
    },
    set setHeight(num) {
      if (num > 0) this.height = num;
    },
    get perimeter() {
      return `${2 * (this.width + this.height)}см`;
    },
    get areaRectangle() {
      return `${this.width * this.height}см`;
    },
  };

  rectangle.setWidth = 25;
  rectangle.setHeight = 30;
  console.log(rectangle.perimeter);
  console.log(rectangle.areaRectangle);
}
