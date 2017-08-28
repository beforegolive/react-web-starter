import React, { Component } from 'react';
import { connect } from 'react-redux'
import cssStyles from './style.css'
import scssStyles from './style.scss'
import Icon from 'src/components/Icon'
import demoActions from 'src/redux/actions/demoActions'

const mapStateToProps = state => {
  return {
    appName: state.demo.appName,
    firstActionDispatched: state.demo.firstActionDispatched
  }
}

const mapDispatchToProps = {
  firstAction: demoActions.firstAction
}

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
  render() {
    const { appName, firstActionDispatched, firstAction } = this.props
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
        <div>
          <button onClick={firstAction}>dispatch firstAction</button>
          <p>firstAction state of dispatch: <b>{firstActionDispatched?"true":"false"}</b></p>
        </div>
      </div>
    );
  }
}

export default App
