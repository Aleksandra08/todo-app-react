import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

// import Footer from "./components/Footer";


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            itemsList: [],
        }
    }

    changeItem = (id) => {
        const todos = [...this.state.itemsList];
        const index = todos.findIndex((item) => item.id === id);
        todos[index] = {
            ...todos[index],
            completed: !todos[index].completed
        };
        this.setState({itemsList: todos})
    };

    addItem = (item) => {
        if (!item) return;
        const todoItem = {
            id: Date.now(),
            title: item,
            completed: false
        };
        this.setState((prev) => ({
                itemsList: [
                    ...prev.itemsList,
                    todoItem
                ]
            }
        ))
    };

    removeItem = (id) => {
        this.setState((prev) => {
            let copyList = [...prev.itemsList];
            copyList.splice(id, 1);
            return {
                itemsList:
                    prev.itemsList.filter((item) => item.id !== id)
            }
        })
    };

    render() {
        return (
            <div className="todoapp">
                <Header addItem={this.addItem}/>
                <Main
                    items={this.state.itemsList}
                    removeItem={this.removeItem}
                    change={this.changeItem}
                />
                {/*<Footer/>*/}
            </div>
        )
    }
}

export default App;
