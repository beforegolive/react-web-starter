import React, {Component, PropTypes} from 'react'
import Icon from 'src/components/Icon'
import styles from './styles.scss'

class SwitchablePanel extends Component {
	render (){
		const { onClick, isSmallMode, ...rest} = this.props
		return (
			<section {...rest} >
				<div className={styles.container}>
					<h3>title</h3>
					<a className={styles.resizeIcon} onClick={onClick}>
						<Icon icon="check"></Icon>
					</a>
					{isSmallMode? this.props.small: this.props.big}
					<div>{this.props.children}</div>
				</div>
			</section>
		)
	}
}

SwitchablePanel.defaultProps = {
	isSmallMode: false
}

SwitchablePanel.displayName = "myTest"

export default SwitchablePanel
