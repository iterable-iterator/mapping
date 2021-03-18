export default function object(mapping) {
	const object_ = {};

	for (const [key, value] of mapping) object_[key] = value;

	return object_;
}
