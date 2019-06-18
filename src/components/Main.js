import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let list = this.props.items.map((el) => {
            return <li> {el} </li>
        });

        return (
            <section className="main">
                <input
                    id="toggle-all"
                    className="toggle-all"
                    type="checkbox"
                />

                <ul className="todo-list">
                    {list}
                </ul>
            </section>
        )

    }

}

export default Main;