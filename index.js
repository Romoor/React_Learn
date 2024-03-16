//alllows you to render html in js
//what to render, where to render
ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));
//ReactDOM.render() with multiple elements
//overrides previous render(,"root")
ReactDOM.render(
    <ul><li>Thing 1</li><li>Thing 2</li></ul>,
    document.getElementById("root"));

