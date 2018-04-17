let ReactDOM = {
    render(element,container){
        container.appendChild(element.render());
    }
}
export default ReactDOM;