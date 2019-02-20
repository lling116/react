import React ,{ Component }from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class LikeButton extends Component {
  constructor () {
    super()
    this.state = { isLiked: false }
  }
  
  static defaultProps ={
  	 likeText: '取消',
  	 unlikedText:'点赞'
  }

  handleClickOnLikeButton () {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  render () {
    
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked ?
        	this.props.likeText : 
        	this.props.unlikedText} 👍
      </button>
    )
  }
}

class Index extends Component {
  render () {
    return (
      <div>
        <LikeButton  />
      </div>
    )
  }
}