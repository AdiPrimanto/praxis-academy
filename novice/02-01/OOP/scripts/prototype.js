//proto bs utk mengubah fungsi menjadi objek

//https://medium.com/koding-kala-weekend/memahami-javascript-sebagai-prototype-based-language-4ea7d18590e7

//https://medium.com/easyread/penerapan-oop-dalam-javascript-part-1-98ed3a427e77

//https://medium.com/easyread/penerapan-oop-dalam-javascript-part-2-822e6c4c53c8


function Employee(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Employee.prototype.fullName = function () {
    return this.firstName + " " + this.lastName;
}

var employee1 = new Employee("Martin", "Roy");
var employee2 = new Employee("Duke", "William");
console.log(employee1.fullName() + "<br>");
console.log(employee2.fullName());