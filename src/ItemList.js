import React, { Component } from 'react'
import Item from './Item'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

class ItemList extends Component {
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
  render() {
    return (
      <>
        <Accordion defaultActiveKey={(this.props.rootProperty?this.props.propertyName: '')} style={!this.props.rootProperty? ({marginLeft: '50px'}): ({})}>
          <Card className="itemList">
            <Accordion.Toggle
              as={Card.Header}
              eventKey={this.props.propertyName}
              className={(this.state.success?"bg-success":"")}>
              {this.props.propertyName}
              <Button
                variant="success"
                size="lg"
                className=" float-right"
                disabled={this.state.success}
                enabled={!this.state.success}
                onClick={this.markSuccess}>
                <span className="glyphicon glyphicon-ok"></span>
              </Button>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={this.props.propertyName}>
              <ListGroup>
                {Object.values(this.props.property).map((property, index, { length }) => (
                  <Item
                    key={index}
                    property={property}
                    propertyName={Object.getOwnPropertyNames(this.props.property)[index]}
                    rootProperty={false}
                  />
                ))}
              </ListGroup>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </>
    )
  }
}
export default ItemList
