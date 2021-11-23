import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'

import './App.css'

const Register = lazy(() => import('./Views/Register'))

function App() {
  return (
    <>
      <Suspense fallback={<span>Loading...</span>}>
        <Router>
          <div>
            <Switch>
              <Route path="/register">
                <Register></Register>
              </Route>
            </Switch>
          </div>
        </Router>
      </Suspense>
    </>
  )
}

export default App
