class Card extends Component{
	
	render(){
		
		return(
			<div className='card'>
		     <div className='card-content'> 
		        {this.props.content}   
		    </div>
	    	</div>
		)
	}

}


ReactDOM.render(
	
	<Card 
	   content={
	   	<div>
	   	   <h2>React.js 小书</h2>
	   	   <div>开源 免费 专业 简单</div>
	       订阅:<input />
	   	</div>
	   }
	/>,document.getElementById('root')
)

上面的方法太冗余:用props.children 和容器类组件样式更美观(他是一个数组)

class Card extends Component{
	
	render(){
		
		return(
			<div className='card'>
		     <div className='card-content'> 
		        {this.props.children}   
		    </div>
	    	</div>
		)
	}

}


ReactDOM.render(
	
	<Card>
	  <h2>React.js 小书</h2>
	  <div>开源 免费 专业 简单</div>
	   订阅:<input />
	 
	</Card>,

