export default class HolbertonCourse{
    constructor(name, length, students){
        this._name = name
        this._length = length
        this._students = students 
    }
    get name(){
        if(typeof(this._name) === String) return(this._name)
    }
    set name(value){ if(typeof(this._name) === String) this._name = value}
    get length(){
        if(typeof(this._length) === Number) return(this._length)
    }
    set length(value){ if(typeof(this._length) === Number) this._length = value}
    get students(){
        if(typeof(this._students) === Array) return(this._students)
    }
    set students(value){ if(typeof(this._students) === Array) this._students = value}
}
