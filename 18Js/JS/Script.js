class Custumer {
	constructor(name) {
		this.name = name
	}
	bye() {
		return 'Куплено';
	}
}
class childCustumer extends Custumer {
	getPresent() {
		return 'Шарик в подарок';
	}
}

const Anya = new childCustumer('Аня')
console.log(Anya);
console.log(Anya.bye());
console.log(Anya.getPresent());
