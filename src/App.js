import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todosArray: []
        }
    }

    addItem = (dataItem) => {
        this.setState((prevData) => {
                return {
                    todosArray: [
                        ...prevData.todosArray,
                        dataItem
                    ]
                }
            }
        )
    };

    render() {
        return (
            <div className="todoapp">
                <Header addItem={this.addItem}/>
                <Main items={this.state.todosArray}/>
            </div>
        )
    }
}

export default App;
