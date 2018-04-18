import React from 'react';
import ReactDOM from 'react-dom';
//Warning: Each child in an array or iterator should have a unique "key" prop.
//一个数组或迭代器中每一个子元素都应该有一个唯一的key属性
function List(props){
  return (
      <ul>
          {
            props.numbers.map((item,index)=>(
                <li key={item}>{item}</li>
            ))
          }
      </ul>

  )
}
//Encountered two children with the same key, `1`
//遇到两个子元素拥有相同的key
//Keys should be unique so that components maintain their identity across updates.
//key应该在唯一的，以组件在更新的时候保持它们的身份唯一性
//Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version
//非唯一性的key可能会导致重复或者被忽略掉，这个行为在未来的版本中将不会被支持
let numbers = [1,1,1];
ReactDOM.render(<List numbers={numbers}/>,document.querySelector('#root'));