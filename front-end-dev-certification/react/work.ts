export function sumOfIntervals(intervals: [number, number][]) {
	// your code here
	intervals.sort(([afst, _], [bfst, __]) => {
		return afst - bfst;
	});

	let [min, max] = intervals[0];
	const ranges: number[] = [];
	const rangePush = () => ranges.push(max === min ? 1 : max - min);

	for (let index = 1; index < intervals.length; index++) {
		const [fst, snd] = intervals[index];

		if (fst <= max && snd > max) {
			rangePush();
			min = fst === max ? max + 1 : max;
			max = snd;
		} else if (fst > max && snd > max) {
			rangePush();
			min = fst;
			max = snd;
		}
	}
	ranges.push(max - min);
	return ranges.reduce((sum, val) => sum + val, 0);
}
