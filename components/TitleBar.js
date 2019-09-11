import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'

export default class extends Component {
  render() {
    return (
      <div className="page-title">
        <Header as='h1' attached='top'>{this.props.pageTitle}</Header>
      </div>
    )
  }
}