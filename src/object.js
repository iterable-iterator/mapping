export default function object ( mapping ) {

	const obj = {} ;

	for ( const [ key , value ] of mapping ) obj[key] = value ;

	return obj ;

}
