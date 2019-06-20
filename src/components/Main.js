import React from 'react';


class Main extends React.Component {
    render() {
        let list = this.props.items.map((el,index) => {
            return (
                <li key={index} // через Date.now выбивает что уже существует элемент с таким ключем.
                    onChange={(index) => this.props.change(index)}
                    className="itemBox">
                    <div className="item">
                        <input
                            className="toggle"
                            type="checkbox"
                        />
                        <label>{el}</label>
                        <button
                            className="destroy"
                            onClick={() => this.props.removeItem(index)}
                        >
                        </button>
                    </div>
                </li>
            )
        });

        return (
            <section className="main">
                <input
                    id="toggle-all"
                    className="toggle-all"
                    type="checkbox"
                />
                <label htmlFor="toggle-all"> </label>
                <ul className="todo-list">
                    {list}
                </ul>
            </section>
        )

    }

}

export default Main;