import React, { Component, Fragment } from 'react'
import axios from 'axios'
import SiteHeader from '../components/SiteHeader'
import { Container, Header } from 'semantic-ui-react'
import ListenLiveBar from '../components/ListenLiveBar'
import "../style.scss"

export default class extends Component {
    
    // Resolve promise and set initial props.
    static async getInitialProps() {
        
        // Make request for posts.
        const response = await axios.get( 'https://www.101espn.com/wp-json/wp/v2/posts' )
        
        // Return response to posts object in props.
        return {
            posts: response.data
        }
    }
    
  render() {
    return (
      <Fragment>
        <SiteHeader />
        <ListenLiveBar />
        <Container text style={{ marginTop: '7em' }}className="wrap">
          <Header as='h1' attached='top'>Last 10 Blog Posts</Header>
        </Container>
      </Fragment>
    )
  }
}