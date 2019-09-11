import Header from '../components/Header'
import ListenLiveBar from '../components/ListenLiveBar'
import { Fragment } from 'react'
import "../style.scss"

export default () => (
    <Fragment>
        <Header/>
        <ListenLiveBar/>
        <h1>Your new server-side rendered React.js app!</h1>
    </Fragment>
)