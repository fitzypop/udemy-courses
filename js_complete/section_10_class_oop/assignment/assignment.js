class Course {
  #price = 0;
  #length = 0;
  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }

  get length() {
    return `${length} hours`;
  }

  set length(val) {
    if (val <= 0) {
      throw 'Invalid Input for Length, must be bigger than 0';
    }
    this.#length = val;
  }

  get price() {
    return `\$${this.#price}`;
  }

  set price(val) {
    if (val <= 0) {
      throw 'Invalid Input for Price, must be bigger than 0';
    }

    this.#price = val;
  }

  courseValue() {
    return this.#length / this.#price;
  }

  summary() {
    return `Course Title: "${this.title}". Price: ${this.price}. Length: ${this.length}.`;
  }
}

const math = new Course('math', 100, 100);
console.log('Math course:', math);
console.log('Course summary:', math.summary());
console.log('Course value:', math.courseValue());

const javascript = new Course('JavaScript', 100, 13);
console.log('JavaScript Course:', javascript);
console.log('Course summary:', javascript.summary());
console.log('Course value:', javascript.courseValue());

class PracticalCourse extends Course {
  constructor(title, length, price, exercisesNum) {
    super(title, length, price);
    this.numOfExercises = exercisesNum;
  }
}

class TheoreticalCourse extends Course {
  publish() {
    console.log('Blah Blah Blah smart things!');
  }
}

console.dir;
