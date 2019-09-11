import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import ListenLiveBar from '../components/ListenLiveBar'
import TitleBar from '../components/TitleBar'

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
        <Header/>
        <ListenLiveBar/>
        <div className="wrap">
          <TitleBar pageTitle="Last 10 Blog Posts"></TitleBar>
          
        </div>
        
      
        
      </Fragment>
    )
  }
}