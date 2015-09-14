/*
 * Module Dependencies
 */

import penias from './penias';

export default {
	penias : {
		find : function (callback){
			setTimeout(() => {
				callback(penias);
			},1000)
		}	
	}
} 
