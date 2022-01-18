import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { createBrowserHistory } from 'history'
import { AppContextProvider } from './data/state'

import './App.css'

import DefaultPage from './Views/DefaultPage'
import WorkerProfile from './Views/WorkerProfile'

const Principal = lazy(() => import('./Views/Principal'))
const Register = lazy(() => import('./Views/Register'))
const Login = lazy(() => import('./Views/Login'))

const hist = createBrowserHistory()

function App() {
  return (
    <>
      <AppContextProvider>
        <AppWorkick></AppWorkick>
      </AppContextProvider>
    </>
  )
}

function AppWorkick() {
  return (
    <>
      <Suspense fallback={<span>Loading...</span>}>
        <Router history={hist}>
          <div>
            <Switch>
              <Route exact path="/">
                <>
                  <Principal>
                    <DefaultPage></DefaultPage>
                  </Principal>
                </>
              </Route>
              <Route exact path="/register">
                <Register></Register>
              </Route>
              <Route exact path="/login">
                <Login></Login>
              </Route>
              <Route exact path="/perfilTrabajador">
                <>
                  <Principal>
                    <WorkerProfile></WorkerProfile>
                  </Principal>
                </>
              </Route>
            </Switch>
          </div>
        </Router>
      </Suspense>
    </>
  )
}

export default App
