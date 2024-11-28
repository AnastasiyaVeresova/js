function getRandomName(randomNames) {
	return randomNames[Math.floor(Math.random() * randomNames.length)];
}

function getRandomAddress(randomAddresses) {
	return randomAddresses[Math.floor(Math.random() * randomAddresses.length)];
}

module.exports = {
	getRandomName,
	getRandomAddress,
};
