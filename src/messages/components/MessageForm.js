import React,{Component} from 'react';
export default class MessageForm extends Component{
    render(){
        return (
            <form>
                <div className="form-group">
                    <label className="control-label" htmlFor="username">用户名</label>
                    <input id="username" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="content">内容</label>
                    <textarea name="content" id="content" cols="30" rows="5" className="form-control"></textarea>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary"/>
                </div>
            </form>
        )
    }
}