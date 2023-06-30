function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
//   this.marks = [];
}

let student1 = new Student('John', 'male', 28);
let student2 = new Student('Sarah', 'female', 23);
let student3 = new Student('Rob', 'male', 32);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    this.marks.push(...marks)
}

Student.prototype.getAverage = function () {
    if(this.hasOwnProperty('marks') && this.marks.length > 0) {
        this.average = this.marks.reduce((acc, mark) => acc + mark) / this.marks.length;
    } else {
        return 0
    }
}

Student.prototype.exclude = function (reason) {
    delete this.marks;
    delete this.subject;
    this.excluded = reason;
}
