
import React from 'react';
import ReactDOM from 'react-dom';
  
class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {username: '',
      list: [
        {
          task: 'play video games',
        },
        {
          task: 'eat junk food',
        },
      ]
    }; 
    }
    SubmitHandler = (event) => {
      event.preventDefault();
      if(this.state.username != ''){
       this.setState(
        prevState => {
            return {
                list: [...prevState.list, {task:this.state.username}]
            };
        }
      );
      }
    }
    ChangeHandler = (event) => {
      this.setState({username: event.target.value});
    }
    
    render() {
      return (
        <form onSubmit={this.SubmitHandler}>
        <p>Enter your new events, and submit:</p>
        <input
          type='text'
          onChange={this.ChangeHandler}
        />
        <input
          type='submit'
        />
        <div>
            <h1>I am a list</h1>
            <ul>
              {this.state.list.map((item) => (
                <li key={item.task}>{item.task}</li>
             ))}
            </ul>
        </div>
        </form>
      );
    }
}

ReactDOM.render(
    <MyForm />,
  document.getElementById('root')
)

