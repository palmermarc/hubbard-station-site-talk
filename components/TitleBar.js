import React, { Component } from 'react'

export default class extends Component {
  
  render() {
    return (
      <div className="page-title">
        <h1>{this.props.pageTitle}</h1>
      </div>
    )
  }
}