class Animal{
	name = "";	
	color = "";
	weight = "";

	constructor(name,color,weight){
		this.name = name;
		this.color = color;
		this.weight = weight;
	}
	showAnimal(){
		console.log("My name is " + this.name + " and my color is " + this.color)
	}

}

class Zoo{

	animalZoo = [];

	constructor(){

	}
	addZoo(animal){
		this.animalZoo.push(animal)
	}
	deleteZoo(){
		this.animalZoo.pop()
	}
	showAllAnimals(){
		this.animalZoo.forEach((element, index, array) => {
			element.showAnimal();
		})
	}
}

const cat = new Animal("cat","black",32);
const bear = new Animal("bear","brown",120)
const dog = new Animal("dog", "green", 45)
const animals = new Zoo();
animals.addZoo(cat)
animals.addZoo(bear)
animals.addZoo(dog)
animals.showAllAnimals()
