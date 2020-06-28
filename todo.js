import cx from "classnames";
import { Component, useState } from "react";
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", todos: [],tasks:0, done:0 };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDone = this.handleDone.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ todos: this.state.todos.concat(this.state.value) });
    this.setState({ value: "" });
    event.preventDefault();
    this.setState({tasks:this.state.tasks+1})
    this.setState({done:this.state.done+1})


  }
  handleDone(event) {
    const element = event.target;
    element.classList.toggle("is-done");
 if(element.classList.value=="is-done"){
    this.setState({done:this.state.done-1})

}
else{
this.setState({done:this.state.done+1})
}
  }

render(){
return (
  <>
    <div>
      <h2> Todo List</h2>
      <input type="text" value={this.state.value} onChange={this.handleChange} />
<button onClick={this.handleSubmit}>Add</button><br></br>
<p> {this.state.done} remaining out of {this.state.tasks} tasks</p>
<ul>
{this.state.todos.map((todo,index)=>(

<li onClick={this.handleDone} key={index}>
{todo}
</li>
))}

</ul>
    </div>

    <style>{`
                    .is-done {
                        text-decoration: line-through;
                    }
                `}</style>
  </>
)}};
