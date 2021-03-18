import test from 'ava' ;

import { enumerate } from '@aureooms/js-itertools' ;

import mapping from "../../src/index.js" ;

import { reflect } from "../../src/index.js" ;

test( 'reflect'  , t => {

	t.is( reflect , mapping.reflect , 'exports are working' ) ;

	t.deepEqual( [...reflect( enumerate( '' ) )] , []) ;

	t.deepEqual( [...reflect( enumerate( 'abcde' ) )] , [['a',0],['b',1],['c',2],['d',3],['e',4]]) ;

} ) ;
