import React, { Component } from 'react'
import Item from './Item'
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        {Object.values(this.props.items).map((property, index, { length }) => (
          <Item
            key={index}
            property={property}
            propertyName={Object.getOwnPropertyNames(this.props.items)[index]}
            rootProperty={true}
          />
        ))}
      </div>
    )
  }
}
export default App
