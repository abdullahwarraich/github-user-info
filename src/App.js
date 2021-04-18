import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Loader from './components/Loader'

const NotFound = lazy(() => import('./pages/NotFound'))
const Login = lazy(() => import('./pages/Login'))
const Profile = lazy(() => import('./pages/Profile'))
const Gist = lazy(() => import('./pages/Gists'))
const Orgs = lazy(() => import('./pages/Orgs'))

const App = () => (
  <Router>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact={true} path='/' component={Login} />
        <Route exact={true} path='/profile' component={Profile} />
        <Route exact={true} path='/gists' component={Gist} />
        <Route exact={true} path='/orgs' component={Orgs} />
        <Route exact={true} path='*' component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
)

export default App
