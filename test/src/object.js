import test from 'ava' ;

import mapping from "../../src/index.js" ;

import { object } from "../../src/index.js" ;

test( 'object'  , t => {

	t.is( object , mapping.object , 'exports are working' ) ;

	t.deepEqual( object( [] ) , {} ) ;

	t.deepEqual(
		object( [ ['a', 0], ['b', 1], ['c', 2], ['d', 3], ['e', 4]] ) ,
	            {  'a': 0 ,  'b': 1 ,  'c': 2 ,  'd': 3 ,  'e': 4 }
	) ;

} ) ;
