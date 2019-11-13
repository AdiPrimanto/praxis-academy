//proto bs utk mengubah fungsi menjadi objek

//https://medium.com/koding-kala-weekend/memahami-javascript-sebagai-prototype-based-language-4ea7d18590e7


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