Comandos usados
npm install --save react  
npm install --save browserify // junstar nuestras dependencias y las terceras
npm install --save babelify  // permitir que transpilemos codigo EMAC script 6 y jsx a javascript

npm run build

Clases

Clase Teoría sobre ciclos de vida ReactJs

- setear default props emacs script 6
  	<component>.defaultProps = { prop : <valor>}

- definir estado inicial
		setInitialState()
	para emacs script 6 es 
		class Conttador extends React.Component {
			constructor(props){
				super(props);
				this.state = {count: 0}
			}
		...
		}
	No esta bien poner en state:
		- Datos calculados
		- Otros Components
		- Datos duplicados de props

- Etapas de la vida de components
	- Mounting: montando component en el dom.
	metodos:
		componentWillMount() -> antes que se monte en el doom	componentDidMount() -> cuando ya se monto (aquí se agregan librerias de terceros)

	- Updating: actualizando component en el dom.
	metodos:
		componentWillReceiveProps(nextProps) -> cuando cambiamos las props de un component
		shouldComponentUpdate(nextProps,nextState) -> nos permite hacer que no se llame al render, permite comparar props.
		componentWillUpdate(nextProps, nextState)-> preparar algo antes de llamar a render (no se puede llamar a setStae).
		componentDidUpdate(prevProps, prevState) -> cuando el component ya se actualizó y podremos operar con el nuevo del dom

	- Unmounting: eliminando component en el dom.
	metodos:
		componentWillUnmount() -> limpiar referencias de metorias, interval, events, etc. para liberar memoria.

- mixins		
	Compartir funcionalidades que tienen en comun distintos components. 

Clase Evnt Handling, State y Browserify

usar "let" en ves de "var"(nuevo estandar)	

========================================