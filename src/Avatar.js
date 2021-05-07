import React from 'react';

function Avatar(props) {
  return (
    <div className="UserInfo">
      <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  )
}

export default Avatar;