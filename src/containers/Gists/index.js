import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Row, Col } from 'antd'
import UserInfo from '../../components/UserDetails'
import Empty from '../../components/Empty'
import DiscriptionCard from '../../components/DiscriptionCard'
import { RepoName } from './style'
import { setUserGists } from '../../store/user'
import { getUserGist } from '../../apis'

const Gists = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { userName, userDetails, userGists } = useSelector(state => state.user)

  useEffect(() => {
    if (userName) {
      getUserGist(userName).then(({ data }) => {
        dispatch(setUserGists(data))
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
          {userGists && userGists.length ? (
            userGists.map(gist => (
              <DiscriptionCard key={gist.id}>
                <RepoName>{gist.description}</RepoName>
                <a href={gist.html_url} target='_blank' rel='noreferrer'>
                  Open gist
                </a>
                {Object.values(gist.files) && Object.values(gist.files)[0] && (
                  <h4>{Object.values(gist.files)[0].language}</h4>
                )}
              </DiscriptionCard>
            ))
          ) : (
            <Empty text='No gist found' />
          )}
        </Row>
      </Col>
    </Row>
  )
}

export default Gists
