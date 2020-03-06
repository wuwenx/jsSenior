import 'babel-polyfill'
[1, 2, 3].map(n => n + 1);
Object.assign({ o: 123 }, { r: 345 });

class parent {
    constructor(a) {
        this.a = a;
    }

};
class child extends parent {
    constructor() {
        super();
    }
};
let childL=new child();