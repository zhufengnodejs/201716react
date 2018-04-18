class Component{
    constructor(props){
        this.props = props;
    }
    createDOMFromString(domStr){
        let oDiv = document.createElement('div');
        oDiv.innerHTML = domStr;
        return oDiv.firstElementChild;
    }
    setState(partialState){
        this.state = Object.assign({},this.state,partialState);
        let oldEle = this.ele;
        let newEle = this._render();
        oldEle.parentNode.replaceChild(newEle,oldEle);
    }
    mount(container){
        let ele = this._render();
        container.appendChild(ele);

    }
    _render(){
        //不能操作DOM
        this.ele = this.createDOMFromString(this.render());
        this.componentDidMount&&this.componentDidMount();
        return this.ele;
    }
}