"use strict";
class Person {
  constructor(firstName, lastName, age, birthDayDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.birthDayDate = new Date(birthDayDate);
  }
  celebrate() {
    console.log("Happy Birthday, let`s celebrate");
  }
}

class Employee extends Person {
  #salary = 1000;
  constructor(firstName, lastName, age, birthDayDate, jobPosition) {
    super(firstName, lastName, age, birthDayDate);
    this.jobPosition = jobPosition;
  }
  getYearSalary() {
    return this.#salary * 12;
  }
  checkCelebrateDay() {
    let day = new Date().getFullYear();
    this.birthDayDate.setFullYear(day);
    let birthDay = this.birthDayDate;
    function isWeekend(date) {
      let checkWeekend = new Date(date).getDay();
      return checkWeekend === 6 || checkWeekend === 0;
    }
    if (isWeekend(birthDay) === true) {
      console.log(super.celebrate());
    } else {
      console.log("Happy Birthday, but I need to work");
    }
  }
}
const personInfo = new Person("Oleg", "Nichaev", 31, "1990-09-21");
const employeeInfo = new Employee("Viacheslav", "Kurov", 30, "1992-10-11");

console.log(employeeInfo);
console.log(personInfo);
console.log(employeeInfo.getYearSalary());
employeeInfo.checkCelebrateDay();
personInfo.celebrate()
employeeInfo.celebrate()