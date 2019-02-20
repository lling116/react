class Header extends Component{
	constructor(){
		super()
		console.log('constructor')
	}
	
	componentWillMount(){
		console.log('component will mount')
	}
	
	componentDidMount(){
		console.log('component did mount')
	}
	
	componentWillUnmount() {
        console.log('component will unmount')
    }
	
	render(){
		console.log('reder')
		return(
			<div>
			   <h1> React 小书</h1>
			</div>
		)
	}
}

class Index extends Component{
	constructor(){
		super()
		this.state={
			isShowHeader: true
		}
	}
	handleShowOrHide(){
		this.setState({
			isShowHeader:!this.state.isShowHeader
		})
	}
	
	render(){
		return(
			<div>
			    {this.state.isShowHeader ? <Header /> : null}
			    <button onClick={this.handleShowOrHide.bind(this)}>
			         显示或隐藏标题
			    </button>
			</div>
		)
	}
}