import React from 'react'
import { Descriptions } from 'antd'
import AntAvatar from '../Avatar'
import { userStyle, loginStyle, bioStyle, UserProfileDiv } from './style'

const UserInfo = ({ userAllDetails }) => {
  const {
    avatar_url,
    name,
    login,
    bio,
    company,
    location,
    email,
    public_repos,
    public_gists,
    followers,
    following
  } = userAllDetails
  return (
    <UserProfileDiv>
      <AntAvatar image={avatar_url} />
      <Descriptions layout='horizontal'>
        {name && (
          <Descriptions.Item span={6} contentStyle={userStyle}>
            {name}
          </Descriptions.Item>
        )}
        {login && (
          <Descriptions.Item span={6} contentStyle={loginStyle}>
            {login}
          </Descriptions.Item>
        )}
        {email && <Descriptions.Item span={6}>{email}</Descriptions.Item>}
        {bio && (
          <Descriptions.Item span={6} contentStyle={bioStyle}>
            {bio}
          </Descriptions.Item>
        )}
        {(followers || following) && (
          <Descriptions.Item span={6}>
            {followers} {followers === 1 ? 'follower' : 'followers'} {following}{' '}
            {'following'}
          </Descriptions.Item>
        )}
        {public_repos && (
          <Descriptions.Item label='Public Repos' span={6}>
            {public_repos}
          </Descriptions.Item>
        )}
        {public_gists && (
          <Descriptions.Item label='Public Gists' span={6}>
            {public_gists}
          </Descriptions.Item>
        )}
        {company && (
          <Descriptions.Item label='Company' span={6}>
            {company}
          </Descriptions.Item>
        )}
        {location && (
          <Descriptions.Item label='Location' span={6}>
            {location}
          </Descriptions.Item>
        )}
      </Descriptions>
    </UserProfileDiv>
  )
}

export default UserInfo
