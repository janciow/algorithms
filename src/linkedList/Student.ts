class Student {
    constructor(public firtName, public lastName, public year = 1234, private tardies = 0) { }
    fullName() {
       return `Your full name is ${this.firtName} ${this.lastName}`
    }

    markLate() {
        this.tardies++;
        return `Your  is ${this.firtName} ${this.lastName} has been late ${this.tardies}`
    }
    static Enroll() {
        return "enroll stusdent"
    }
}

const student = new Student('dupa', 'blada')
console.log(student);
console.log(student.markLate())
console.log(student.markLate())
console.log(Student.Enroll())