import React, { Component } from 'react'
import ItemList from './ItemList'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

class Item extends Component {
  constructor() {
    super()
    this.state = {
      success: false,
    }
  }
  markSuccess = (e) => {
    e.stopPropagation()
    this.setState({
      success: true
    })
  }
  createListOrItem = props => {
    return (props.property ? (
      <ItemList
        property={props.property}
        propertyName={props.propertyName}
        rootProperty={props.rootProperty}
      />
    ) : (
      <ListGroup.Item className={(this.state.success?"bg-success":"")}>
      {this.props.propertyName}
      <Button
        variant="success"
        size="lg"
        className="float-right"
        disabled={this.state.success}
        enabled={!this.state.success}
        onClick={this.markSuccess}>
        <span className="glyphicon glyphicon-ok"></span>
      </Button>
      </ListGroup.Item>
    ))
  }
  render() {
    return (
      <>
        {this.createListOrItem(this.props)}
      </>
    )
  }
}
export default Item