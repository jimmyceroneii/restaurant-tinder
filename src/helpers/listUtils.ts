export const randomizeList = ({ list }: { list: Array<string> }): string[] => {
	const startIndex = Math.floor(Math.random() * (list.length - 8));
	return shuffle(list).slice(startIndex, startIndex + 8);
};

const shuffle = (array: string[]): string[] => {
	let currentIndex = array.length, randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex !== 0) {

		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex]];
	}

	return array;
}

