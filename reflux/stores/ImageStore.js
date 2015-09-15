/*
 * Module dependencies
 */

import Reflux from 'reflux';
import $ from 'jquery';
import ImageActions from '../actions/ImageActions';

let ImageStore = Reflux.createStore({
	init : function(){
		this.fetchList();
	},
	url :`https://api.flickr.com/services/feeds/photos_public.gne?format=json`,
	//decirle al store que escuche las acciones de las imagenes
	listenables : [ImageActions],
	imagelist: [],
	fetchList: function () {
		let tags = ['animals', 'nature', 'food', 'travel' ,'cars', 'sport'];
		let randomTag = tags[Math.floor(Math.random()*tags.length)];
		$.ajax({
			url: this.url + `&tag=${randomTag}`,
			dataType:'jsonp',
			jsonpCallback: 'jsonFlickrFeed',
			cache:false,
			context:this,
			success: function(data){
				console.log('fecht volvio');
				this.imagelist = data.items;
				//llamar a trigger del imageStore para que se dispare la actualización de las vistas
				this.trigger(this.imagelist);
			}
		})
	}
});

export default ImageStore;

