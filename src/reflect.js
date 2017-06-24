
export default function* reflect ( mapping ) {

	for ( const [ key , value ] of mapping ) yield [ value , key ] ;

}
