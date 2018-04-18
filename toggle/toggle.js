class ToggleBtn{
    constructor(){
        //定义一个私有变量
        this.state = {isToggleOn:false};
    }
    createDOMFromString(domStr){
     let oDiv = document.createElement('div');
     oDiv.innerHTML = domStr;
     return oDiv.firstElementChild;
    }
    setState(partialState){
      this.state = Object.assign({},this.state,partialState);
      let oldEle = this.ele;
      let newEle = this.render();
      oldEle.parentNode.replaceChild(newEle,oldEle);
    }
    handleClick(){
        this.setState({isToggleOn:!this.state.isToggleOn});
    }
    //用来表明页面上内容的样子
    render(){
        this.ele = this.createDOMFromString(`<button id="toggleBtn">${this.state.isToggleOn?'关':'开'}</button>`);
        this.ele.addEventListener('click',this.handleClick.bind(this));
        return this.ele;
    }
}