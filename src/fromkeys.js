export default function* fromkeys(seq, value) {
	for (const key of seq) yield [key, value];
}
