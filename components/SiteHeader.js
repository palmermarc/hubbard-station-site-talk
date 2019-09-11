import Link from 'next/link'
import { Image } from 'semantic-ui-react'

export default () => (
  <header>
    <div className="wrap">
      <Link replace href="/"><a><Image src="https://wxosdev.wpengine.com/wp-content/uploads/2019/09/101ESPN-Logo.svg" alt="" title="" id="mainlogo"/></a></Link>
      <nav>
        <ul>
          <li><Link replace href="/"><a href="/">Home</a></Link></li>
          <li><Link replace href="/posts"><a href="/posts">Posts</a></Link></li>
        </ul>
      </nav>
    </div>
  </header>
)