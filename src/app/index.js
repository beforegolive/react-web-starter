import React, { Component } from 'react';
import { connect } from 'react-redux'
import cssStyles from './style.css'
import scssStyles from './style.scss'
import Icon from 'src/components/Icon'

const mapStateToProps = state => {
  return {
    appName: state.firstReducer.appName
  }
}

@connect(mapStateToProps)
class App extends Component {
  render() {
    const { appName } = this.props
    return (
      <div>
				<h1>{appName}</h1>
        <div className={cssStyles.containerCss}>
          css style
          <a href="">Link</a>
          icon-back:
          <Icon icon="back" />
        </div>
        <div className={scssStyles.containerScss}>scss style</div>
      </div>
    );
  }
}

export default App
