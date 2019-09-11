import SiteHeader from '../components/SiteHeader'
import ListenLiveBar from '../components/ListenLiveBar'
import { Fragment } from 'react'
import "../style.scss"

export default () => (
    <Fragment>
        <SiteHeader />
        <ListenLiveBar/>
        <h1>Your new server-side rendered React.js app!</h1>
    </Fragment>
)