import React from 'react';
import PropTypes from 'prop-types';
import Video from 'Common/Video';

const TeacherCard = ({nickname, oms_apply_video_url}) => (
  <div>
    <p>{nickname}</p>
    {oms_apply_video_url ? <Video url={oms_apply_video_url} /> : 'no video'}
  </div>
)

TeacherCard.prototype = {
  nickname: PropTypes.string.isRequired,
  oms_apply_video_url: PropTypes.string
}

export default TeacherCard
