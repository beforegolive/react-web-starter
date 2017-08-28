import React, { PropTypes, Component} from 'react'

class Icon extends Component {
	render (){
		const { icon } = this.props
		const iconFullName = `ui-icon-${icon}`
		return(
			<i className={iconFullName}>
				{this.props.children}
			</i>
		)
	}
}

export default Icon
