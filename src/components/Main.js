import React from 'react';


class Main extends React.Component {
    render() {
        let list = this.props.items.map((el) => {
            return (
                <li key={el.id}
                    className="itemBox">
                    <div className="item">
                        <input
                            onChange={() => this.props.change(el.id)}
                            checked={el.completed}
                            className="toggle"
                            type="checkbox"
                        />
                        <label>{el.title}</label>
                        <button
                            className="destroy"
                            onClick={() => this.props.removeItem(el.id)}
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