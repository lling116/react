const users=[
    {username:'Jerry',age:21,gender:'male'},
    {username:'Tom',age:22,gender:'male'},
    {username:'Licy',age:21,gender:'female'},
    {username:'Lucy',age:21,gender:'female'}
]

class Index extends Component {
  render () {
    const usersElements = [] // 保存每个用户渲染以后 JSX 的数组
    for (let user of users) {
      usersElements.push( // 循环每个用户，构建 JSX，push 到数组中
        <div>
          <div>姓名：{user.username}</div>
          <div>年龄：{user.age}</div>
          <div>性别：{user.gender}</div>
          <hr />
        </div>
      )
    }

    return (
      <div>{usersElements}</div>
    )
  }
}


//map 方法:
现在只需要记住一个简单的规则：对于用表达式套数组罗列到页面上的元素，都要为每个元素加上 key 属性，这个 key 必须是每个元素唯
一的标识。一般来说，key 的值可以直接后台数据返回的 id，因为后台的 id 都是唯一的。


const users=[
    {username:'Jerry',age:21,gender:'male'},
    {username:'Tom',age:22,gender:'male'},
    {username:'Licy',age:21,gender:'female'},
    {username:'Lucy',age:21,gender:'female'}
]

class Index extends Component {
  render () {
    return (
      <div>
         {
         	users.map((user,i)=>{
         		return(
         			<div>
         			     <div>姓名:{user.userName}</div>
         			     <div>年龄:{user.age}</div>
         			     <div>性别:{user.gender}</div>
         			     <hr />
         			</div>
         		)
         	}
         		
         	)
         }
      </div>
    )
  }
}
