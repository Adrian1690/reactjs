/*
 * Module dependencies
 */

import React from 'react';
import Reflux from 'reflux';
import ImageStore from '../stores/ImageStore';

let ImageGrid = React.createClass({
	// Para que el componente imageGrid reacciones a los cambios del store
	// utilizamos mixins
	mixins: [Reflux.connect(ImageStore, 'imagestore')],
	render: function (){
		if(this.state.imagestore){
			return <div>
			{
				this.state.imagestore.map((image) => {
					return <div className="image"> 
						<a href={image.link}>
							<img src={image.media.m} />
						</a>
					</div>
				})
			}	
			</div>
		}else{
			return <p>No hay imagenes disponibles</p>
		}
	}
});

export default ImageGrid;