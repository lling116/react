class DOG extends Component{
	constructor () {
         super();
        this.state = {
        	isRuning: false,
        	isBarking: false
        }
    }
	
	run(){
		console.log('run')
		
		this.setState({isRuning:true})
	    setTimeout(()=>{this.setState({isRuning:false}); console.log("timeout")},20)
	}
	
	bark(){
		 console.log('bark')
		 this.setState({isBarking:true})
	     setTimeout(()=>this.setState({isBarking:false}),20)
	}
	
	
	handleClickOnDog(){
		this.bark();
		this.run();
	}

	
	render(){
		return(
			<div onClick={this.handleClickOnDog.bind(this)}>DOG</div>
		)
	}
}