import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Video from 'Common/Video';

const TeacherCard = ({ id, nickname, oms_apply_video_url }) => (
  <div>
    <Link
      to={{
        pathname: `/teacher/${id}`,
        state: { modal: true }
      }}
    >
      <p>{nickname}</p>
    </Link>
    {oms_apply_video_url ? <Video url={oms_apply_video_url} /> : 'no video'}
  </div>
);

TeacherCard.prototype = {
  id: PropTypes.number.isRequired,
  nickname: PropTypes.string.isRequired,
  oms_apply_video_url: PropTypes.string
};

export default TeacherCard;
