import React from 'react';
import Add from './Add';
import uuid from 'uuid';


class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {data:[
  {
    id:uuid.v4(),
    title:"Jay",
    date:"2016"
  },
  {
    id:uuid.v4(),
    title:"Battle",
    date:"2015"
  },
]
    };
  }
  handleAddItem(movie){
    let movies = this.props.data;
    movies.push(movie);
    this.setState({
      data:movies
    });
  }

  deleteMovie(id){
    let movies = this.state.data;
    let index = movies.findIndex(x =>x.id===id);
    movies.splice(index,1);
    this.setState({
      data:movies
    });
  }

  render(){
    const data = this.state.data;
    const listItem = data.map(content =>
       <li key={content.title}>{content.title}---{content.date}<a href="#" onClick={this.deleteMovie.bind(this,content.id)}>X</a></li>
    );
    return (
      <div>
        <Add addItem={this.handleAddItem.bind(this)}/>
         <ul> 
          {listItem}
        </ul>
      </div>
  
    );
  }
}



export default App