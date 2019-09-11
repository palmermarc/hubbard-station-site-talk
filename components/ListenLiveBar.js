import React, { Component, Fragment } from 'react'
import Link from 'next/link'

export default class extends Component {
	
	// Resolve promise and set initial props.
	componentDidMount () {
		// Make request for posts.
		const script = document.createElement("script");
		script.src = "//live.101espn.com/wp-content/uploads/hll-widgets/main.min.js";
		script.async = true;
		
		document.body.appendChild(script);
	}
	
	render() {
		return (
			<div className="hll-livebar talk" id="hll-widget-content">
				<div id="hll-actions" className="wrap">
					<ul>
						<li className="play-button">
							<Link href="http://live.101espn.com?utm_source=station-website&amp;utm_medium=widget&amp;utm_campaign=livebar">
								<span className="svg-icon play-circle-outline">
									<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsLink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
										<path d="M10 16.5l6-4.5-6-4.5v9zM12 2c-5.525 0-10 4.475-10 10s4.475 10 10 10 10-4.475 10-10-4.475-10-10-10zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#ff0000"></path>
									</svg>
									<i className="icon-play-circle-outline"> </i>
								</span>
							</Link>
						</li>
						<li className="app-links">
							<Link className="reward-app-badge" href="https://itunes.apple.com/us/app/id611290266">
								<a target="_blank" className="reward-app-badge"><img src="//live.101espn.com/wp-content/plugins/hubbard-listen-live/widgets/assets/img/apple-app-download.svg" /></a>
							</Link>
							<Link href="https://play.google.com/store/apps/details?id=com.wxos.sports101">
								<a target="_blank" className="reward-app-badge"><img src="//live.101espn.com/wp-content/plugins/hubbard-listen-live/widgets/assets/img/google-play-badge.png" /></a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}