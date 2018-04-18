import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
class Suggest extends React.Component{
   constructor(){
      super();
      this.state = {words:[1,2,3]};
   }
   render(){
      return (
          <div className="panel panel-default">
            <div className="panel-heading">
                <input type="text" className="form-control"/>
            </div>
             <div className="panel-body">
                <ul className="list-group">
                    {
                        this.state.words.map((word,index)=>(
                            <li key={index}></li>
                        ))
                    }
                </ul>
             </div>
          </div>
      )
   }
}
ReactDOM.render(<Suggest/>,document.querySelector('#root'));