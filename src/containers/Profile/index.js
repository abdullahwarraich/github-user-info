import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Row, Col, Card } from 'antd'
import UserInfo from '../../components/UserDetails'
import Empty from '../../components/Empty'
import { RepoName, repoStyle } from './style'
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
        <Row>
          {userRepos && userRepos.length ? (
            userRepos.map(repo => (
              <Card key={repo.id} style={repoStyle}>
                <RepoName>{repo.name}</RepoName>
                <p>{repo.description}</p>
                <a href={repo.html_url} target='_blank' rel='noreferrer'>
                  Open repo
                </a>
                <h4>{repo.language}</h4>
              </Card>
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
