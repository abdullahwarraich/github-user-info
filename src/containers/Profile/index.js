import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Row, Col } from 'antd'
import UserInfo from '../../components/UserInfo'
import Empty from '../../components/Empty'
import DiscriptionCard from '../../components/DiscriptionCard'
import { RepoName } from './style'
import { setUserRepos } from '../../store/user'
import { getUserRepos } from '../../apis'

const Profile = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { userName, userDetails, userRepos } = useSelector(state => state.user)

  useEffect(() => {
    if (userName) {
      getUserRepos(userName).then(({ data }) => {
        dispatch(setUserRepos(data))
      })
    }
    if (!userName) {
      history.push('/')
    }
  }, [dispatch, history, userName])

  return (
    <Row gutter={[8, 8]} justify='space-between'>
      <Col span={8} xs={24} md={8}>
        <UserInfo userAllDetails={userDetails} />
      </Col>

      <Col span={16} xs={24} md={16}>
        <Row justify='center'>
          {userRepos && userRepos.length ? (
            userRepos.map(repo => (
              <DiscriptionCard key={repo.id}>
                <RepoName>{repo.name}</RepoName>
                <p>{repo.description}</p>
                <a href={repo.html_url} target='_blank' rel='noreferrer'>
                  Open repo
                </a>
                <h4>{repo.language}</h4>
              </DiscriptionCard>
            ))
          ) : (
            <Empty text='No repo found' />
          )}
        </Row>
      </Col>
    </Row>
  )
}

export default Profile
