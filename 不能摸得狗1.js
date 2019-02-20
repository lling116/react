class DOG extends Component{
	constructor () {
         super();
       
    }
	
	run(){
		console.log('run')
	}
	
	bark(){
		 console.log('bark')
	
	}
	

	
	render(){
		return(
			<div onClick={()=>{this.bark();this.run();}}>DOG</div>
		)
	}
}
