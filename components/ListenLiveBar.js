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