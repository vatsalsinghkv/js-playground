const add = (a, b, print) => setTimeout(print, 2000, a + b);

add(1, 4, (sum) => {
	console.log(sum);
});
