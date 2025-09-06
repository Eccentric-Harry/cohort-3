class Rectangle{
    constructor(width, heigth, color){
        this.width = width;
        this.height = heigth;
        this.color = color;
    }

    area(){
        console.log(this);
        return this.width * this.height;
    }

    print(){
        console.log(`Width: ${this.width}, Height: ${this.height}, Color: ${this.color}`);
    }
}

const rect1 = new Rectangle(10,20,'Red');
const rect2 = new Rectangle(5,10,'Blue');

console.log(rect1.area(rect1.width, rect1.height));
rect1.print();


const map = new Map();
map.set('name', 'Alice');
map.set('age', 30);
