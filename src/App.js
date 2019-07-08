import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from "./components/Footer";

const FIELD = {
  all: 'all',
  active: 'active',
  completed: 'completed'
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      itemsList: [],
      filterField: FIELD.all,
      checked: false
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
          prev.itemsList.filter((item) => item.id !== id),
      }
    })
  };

  changeFilterBy = (field) => {
    this.setState({filterBy: field})
  };

  onFilter = (field) => {
    switch (field) {
      case FIELD.all: {
        return this.state.itemsList
      }
      case FIELD.active: {
        return this.state.itemsList.filter((item) => !item.completed)
      }
      case FIELD.completed: {
        return this.state.itemsList.filter((item) => item.completed)
      }
      default: {
        return this.state.itemsList
      }
    }
  };

  checkedAllItems = () => {
    const listOfItems = this.state.itemsList.map((item) => ({
      ...item,
      completed: !this.state.checked,
    }));

    this.setState({
      itemsList: listOfItems,
      checked: !this.state.checked
    })
  };


  render() {
    const filteredItems = this.onFilter(this.state.filterBy);
    return (
      <div className="todoapp">
        <Header addItem={this.addItem}/>
        <Main
          items={filteredItems}
          removeItem={this.removeItem}
          change={this.changeItem}
          checkedAllItems={this.checkedAllItems}
        />
        <Footer
          count={filteredItems.length}
          filterItems={this.changeFilterBy}
          filterField={FIELD}
          showCurrentList={this.state.filterBy}
        />
      </div>
    )
  }
}

export default App;
