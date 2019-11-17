import React, { Component } from 'react'
import Item from './Item'
import './index.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: {
        "ApplePie": {
          "Apples": null,
          "Crust": {
            "Milk": null,
            "Flour": null
          },
          "Sugar": null
        },
      },
    }
  }
  render() {
    return (
      <div className="App">
        {Object.values(this.state.items).map((property, index, { length }) => (
          <Item
            key={index}
            property={property}
            propertyName={Object.getOwnPropertyNames(this.state.items)[index]}
            rootProperty={true}
            //style={{marginLeft: 50}}
          />
        ))}
      </div>
    )
  }
}
export default App
