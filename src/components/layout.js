import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const header = (
    <div className="title-container">
      <Link className="title-link" to="/">
        <StaticImage
          className="title-logo bio-avatar"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/profile-pic--2.jpg"
          width={50}
          height={50}
          quality={95}
          alt="Profile picture"
        />
      </Link>
      <div className="title-content">
        <h1 className="main-heading">
          <Link className="title-link" to="/">
            {title}
          </Link>
        </h1>
        <div className="main-secondary">A web developer's blog</div>
      </div>
    </div>
  )

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
