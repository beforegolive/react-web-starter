import React, { Component } from 'react'
import ReactGridLayout, {WidthProvider} from 'react-grid-layout'
import autobind from 'autobind-decorator'
import _ from 'lodash'
import styles from './gridLayout.scss'
import './globalStyles.scss'
import SwitchablePanel from 'src/components/SwitchablePanel'

const ReactGridLayoutProvider = WidthProvider(ReactGridLayout)

class FirstGridLayout extends Component {
	state = {
		items: [0, 1, 2, 3, 4].map(function(i, key, list) {
        return {i: i.toString(), x: i * 2, y: 0, w: 2, h: 2, add: i == (list.length - 1).toString()};
      }),
    newCounter: 0
	}

	@autobind
	createElement(el) {
    var removeStyle = {
      position: 'absolute',
      right: '2px',
      top: 0,
      cursor: 'pointer'
    };
    var i = el.add ? '+' : el.i;
    return (
      <div key={i} data-grid={el}>
        {el.add ?
          <span className="add text" onClick={this.onAddItem} title="You can add an item by clicking here, too.">Add +</span>
        : <span onClick={()=>this.handleClick(i)} className="text">{i}</span>}
        <span className="remove" style={removeStyle} onClick={this.onRemoveItem.bind(this, i)}>x</span>
      </div>
    )
  }

	handleClick(i){
		const { items } = this.state
		let currItem = items.find(x=>x.i===i)

		if(!currItem.isSmall){
			currItem.i=currItem.i.split('-')[0] + '-small'
			currItem.h=1
			currItem.w=1
			currItem.isSmall = true
		} else {
			currItem.i=currItem.i.split('-')[0] + '-big'
			currItem.h=2
			currItem.w=2
			currItem.isSmall = false
		}

		this.setState({items:items})
	}

	@autobind
	onAddItem() {
	 /*eslint no-console: 0*/
	 console.log('adding', 'n' + this.state.newCounter);
	 this.setState({
		 // Add a new item. It must have a unique key!
		 items: this.state.items.concat({
			 i: 'n' + this.state.newCounter,
			 x: this.state.items.length * 2 % (this.state.cols || 12),
			 y: Infinity, // puts it at the bottom
			 w: 2,
			 h: 2
		 }),
		 // Increment the counter to ensure key is always unique.
		 newCounter: this.state.newCounter + 1
	 })
 }

	@autobind
 	onRemoveItem(i) {
    console.log('removing', i);
    this.setState({items: _.reject(this.state.items, {i: i})});
  }

	render() {
		return(
			<ReactGridLayoutProvider className={styles.layout} cols={9} width={1200} rowHeight={50} margin={[50,50]} >
				{_.map(this.state.items, this.createElement)}
				<SwitchablePanel key='s1' data-grid={{x:1, y:2, w:2, h:2}} >SwitchablePanel</SwitchablePanel>
				<div key="e" data-grid={{x:1, y:1, w:1, h:2}}>e</div>
			</ReactGridLayoutProvider>
		)
	}
}

export default FirstGridLayout
