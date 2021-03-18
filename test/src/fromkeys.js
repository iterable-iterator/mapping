import test from 'ava' ;

import mapping from "../../src/index.js" ;

import { fromkeys } from "../../src/index.js" ;

test( 'fromkeys'  , t => {

	t.is( fromkeys , mapping.fromkeys , 'exports are working' ) ;

	t.deepEqual( [...fromkeys( '' , 1 )] , []) ;

	t.deepEqual( [...fromkeys( 'abcde' , 1 )] , [['a',1],['b',1],['c',1],['d',1],['e',1]]) ;

} ) ;
