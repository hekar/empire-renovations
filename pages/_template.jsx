import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import '../css/markdown-styles'
import Nav from '../component/nav'
import '../bootstrap/less/bootstrap.less'
import 'react-photoswipe/lib/photoswipe.css';

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <div className="container">
          <Nav />
          {this.props.children}
        </div>
      </div>
    )
  },
})
