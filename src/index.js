import React from 'react';

export default class TypeCount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', count: 0};
    }

    update(event) {        
        let value = event.target.value;
        let count = value.trim().length;

        if (count <= this.props.max) {
            this.setState({
                value: value,
                count: count
            });
        }
    }
    
    render() {
        let left = this.props.max - this.state.count;
        let message = 
            <p className={left <= this.props.warnAt ?
                'TypeCount__message TypeCount__message--warning' :
                'TypeCount__message'}>
                {left}{left === 1 ? ' character ' : ' characters '}remaining
            </p>;
            
        return (
            <div className='TypeCount'>
                <textarea
                    className='TypeCount__input'
                    value={this.state.value}
                    onChange={this.update.bind(this)} />
                {left <= this.props.showAt ? message : null}
            </div>
        );
    }
}

TypeCount.propTypes = {
    max: React.PropTypes.number,
    showAt: React.PropTypes.number,
    warnAt: React.PropTypes.number
};
TypeCount.defaultProps = { max: 140, showAt: 100, warnAt: 10 };
