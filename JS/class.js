class Person {
    constructor(name){
        this.name = name;
        console.log('parent constructor');
    }
    walk() {
        console.log(this.name + ' walks');
    }
}

class Student extends Person {
    constructor(name) {
        console.log('child constructor');        
        super(name);
    }
    study() {
        console.log(this.name + ' studying');
    }
}

let stu = new Student('san');
stu.walk();
stu.study();