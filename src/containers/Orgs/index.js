import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Row, Col } from 'antd'
import UserInfo from '../../components/UserInfo'
import AntAvatar from '../../components/Avatar'
import Empty from '../../components/Empty'
import DiscriptionCard from '../../components/DiscriptionCard'
import { RepoName } from './style'
import { setUserOrgs } from '../../store/user'
import { getUserOrgs } from '../../apis'

const Orgs = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { userName, userDetails, userOrgs } = useSelector(state => state.user)

  useEffect(() => {
    if (userName) {
      getUserOrgs(userName).then(({ data }) => {
        dispatch(setUserOrgs(data))
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
          {userOrgs && userOrgs.length ? (
            userOrgs.map(orgs => (
              <DiscriptionCard key={orgs.id}>
                <AntAvatar image={orgs.avatar_url} />
                <RepoName>{orgs.login}</RepoName>
                <h4>{orgs.description}</h4>
              </DiscriptionCard>
            ))
          ) : (
            <Empty text='No organization found' />
          )}
        </Row>
      </Col>
    </Row>
  )
}

export default Orgs
