//虚拟DOM
class Element{
    constructor(type,attrs,children){
      this.type = type;
      this.attrs = attrs;
      this.children = children;
    }
    //把自己这个虚拟DOM转成真实DOM
    render(){
      let element = document.createElement(this.type);//创建真实DOM元素
      //把虚拟 DOM上的属性一一赋给真实DOM
      for(let attr in this.attrs){
          element.setAttribute(attr,this.attrs[attr]);
      }
      this.children.forEach(child=>{
         let childEle = (child instanceof Element)?child.render():document.createTextNode(child);
         element.appendChild(childEle);
      });
      return element;
    }
}
let React = {
    //1.参数是标签名 属性对象 子元素
    createElement(type,attrs,...children){
       return new Element(type,attrs,children)
    }
}
export default React;