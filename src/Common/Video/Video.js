import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ url }) => <video src={url} controls />;

Video.prototype = {
  url: PropTypes.string.isRequired
};

export default Video;
