import React, {
	Component
} from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
	static contextTypes = {
		store: PropTypes.object
	}
	constructor() {
		super();
		this.state = {
			themeColor: ''
		}
	}
	componentWillMount() {
		const {
			store
		} = this.context;
		this._updateThemeColor();
		store.subscribe(() => this._updateThemeColor());
	}
	_updateThemeColor() {
		const {
			store
		} = this.context;
		const state = store.getState();
		this.setState({
			themeColor: state.themeColor
		})
	}
	render() {
		return (<div>
			<h1 style={{color:this.state.themeColor}}>我是大TITLE</h1>
		</div>)
	}
}

export default Header;