import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

// import Footer from "./components/Footer";


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            itemsList: []
        }
    }

    changeItem = (item) => {
        console.log("Checked", item)
    };

    addItem = (item) => { // Просьба подсказать, как в таком случае создавать элементы у которых можно задать свой id,
        // и остальные флаги с помощью которых смогу далее реализовать все остальные методы. В этом методе не получается(
        // Так как изначально не продумала всю архитектуру приложения, теперь на каждом шагу все ломаю((
        if (!item) {
            return
        }
        this.setState((prev) => {
                return {
                    itemsList: [
                        ...prev.itemsList,
                        item
                    ]
                }
            }
        )
    };

    removeItem = (item) => {
        this.setState((prev) => {
                let copyList = [...prev.itemsList];
                copyList.splice(item, 1);
                return {itemsList: copyList};
            }
        )
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
