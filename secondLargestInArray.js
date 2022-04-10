// How to find Second largest value in the Array
const arr = [10, 5, 15, 1999, 12, 100, 1111, 2000];

let first = Number.MIN_VALUE;
let second = Number.MIN_VALUE;

arr.forEach((item) => {
	if (item > first) {
		second = first;
		first = item;
	} else if (item > second && item != first) {
		second = item;
	}
});

console.log(second);
