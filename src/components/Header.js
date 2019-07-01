import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = (event) => {
            this.setState({value: event.target.value});
        };

        this.handleSubmit = (event) => {
            event.preventDefault();
            this.props.addItem(this.state.value);
            this.setState({
                value: ''
            })
        }
    }

    render() {
      return (
            <header className='header'>
                <h1>todos</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className='new-todo'
                        placeholder='What needs to be done?'
                        value={this.state.value}
                        type='text'
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        )
    }

}
