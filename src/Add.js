import React from 'react';
import uuid from 'uuid';

class Add extends React.Component {
  constructor(){
    super();
    this.state = {
      newMovie:{}
    }
  }

  handleSubmit(e){
    if(this.refs.title.value===''){
      alert("Title is required");
    }else{
      this.setState({newMovie:{
          id:uuid.v4(),
          title:this.refs.title.value,
          date:this.refs.date. value
        }},function(){
        console.log(this.state);
        this.props.addItem(this.state.newMovie);
      });
    }
    e.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
          title:
          <input type="text"  ref="title"   />
          date:
          <input type="text"  ref="date"/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}




export default Add