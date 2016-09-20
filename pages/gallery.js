import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'
import photos from '../utils/photos'
import { PhotoSwipe, PhotoSwipeGallery } from 'react-photoswipe'

function createItem(image) {
  const domain = 'http://empirerenovations.ca';
  const root = {
    full: 'img/full',
    thumbnail: 'img/thumbnail'
  };

  const src = `${domain}/${root.full}/${image.path}`
  const thumbnail = `${domain}/${root.thumbnail}/${image.path}`
  return {
    src,
    thumbnail,
    w: 1200,
    h: 900,
    title: 'Image ' + Math.random()
  };
}

function createGallery(photos) {
  return photos.map(path => {
    return createItem({
      path
    });
  });
}

function createGalleries(photos) {
  return Object.keys(photos).map(key => {
    return createGallery(photos[key]);
  });
}

const options = {
};

const getThumbnail = (item) => {
  console.log('a');
  return (
    <img
      src={item.thumbnail}
      width={120}
      height={90}/>
  );
}

export default class ReactComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      isOpen: false,
      items: createGalleries(photos)
    };
  }

  handleClick () {
    this.setState({ isOpen: true })
  }

  handleClose () {
    this.setState({ isOpen: false })
  }

  render () {
    const title = `${config.siteTitle} | React.js components`;

    let k = 0;
    const galleries = this.state.items.map(i => {
      return <PhotoSwipeGallery
        key={k++}
        items={i}
        thumbnailContent={getThumbnail}
        options={options} />;
    });

    return (
      <div>
        <Helmet title={title} />
        {galleries}
      </div>
    )
  }
}
