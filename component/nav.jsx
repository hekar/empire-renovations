import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

class Title extends React.Component {
  render() {
    return (
      <Link to={prefixLink('/')}>
        <h1>Empire Renovations</h1>
      </Link>
    );
  }
}

export default class Nav extends React.Component {
  render() {
    return <div>
      <h1>Nav</h1>
      <Title />
    </div>
  }
}
