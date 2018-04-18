class ToggleBtn{
    createDOMFromString(domStr){
     let oDiv = document.createElement('div');
     oDiv.innerHTML = domStr;
     return oDiv.firstElementChild;
    }
    //用来表明页面上内容的样子
    render(){
        this.ele = this.createDOMFromString(`<button id="toggleBtn">开</button>`);
    }
}