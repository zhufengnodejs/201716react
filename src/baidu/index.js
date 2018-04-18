import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

/**
 * 原生
 * XMLHttpRequest
 * jquery $.ajax
 * fetch
 * axios
 */
function jsonp(wd){
    return new Promise(function(resolve,reject){
        let script = document.createElement('script');
        let cb = `jQuery${Date.now()}`;
        window[cb] = (data)=>{
            resolve(data);
            script.parentNode.removeChild(script);
        }
        let url =  `http://www.baidu.com/su?wd=${wd}&cb=${cb}`;
        script.src = url;
        document.body.appendChild(script);
    });
}
class Suggest extends React.Component{
   constructor(){
      super();
      this.state = {words:[]};
   }
   handleChange = (event)=>{
       let wd = event.target.value;
       jsonp(wd).then(data=>{
           let words = data.s;
           this.setState({words});
       });
   }
   render(){
      return (
          <div className="container">
              <div className="row">
                  <div className="col-md-8 col-md-offset-2">
                      <div className="panel panel-default">
                          <div className="panel-heading">
                              <input
                                  onChange={this.handleChange}
                                  type="text"
                                  className="form-control"/>
                          </div>
                          <div className="panel-body">
                              <ul className="list-group">
                                  {
                                      this.state.words.map((word,index)=>(
                                          <li className="list-group-item"
                                              key={index}>{word}</li>
                                      ))
                                  }
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      )
   }
}
ReactDOM.render(<Suggest/>,document.querySelector('#root'));