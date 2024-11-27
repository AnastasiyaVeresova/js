const { calculateResultSum } = require("./calculateResultSum.js");

const color = require("colors/safe");

const total2 = calculateResultSum([12.1, 32.2, 43.1], 0.9);
// console.log(`Результат суммы чисел без number-precision от npm: ${total}`);

// function calculateResultSum(purchases, discount) {
// 	let total = purchases.reduce(
// 		(acc, purchase) => np.plus((acc += purchase)),
// 		0
// 	);
// 	total = np.times(total, discount);
// 	return total;
// }

console.log(
	total2 < 50
		? color.red(`Результат суммы чисел c number-precision от npm: ${total2}`)
		: color.green(`${total2}`)
);
