import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useMediaPredicate } from 'react-media-hook'

const Home = lazy(() => import('./view-components/Home'))
const Hotels = lazy(() => import('./view-components/Hotels'))
const LoadingMessage = () => `loading...`

import Logo from './partial-components/Logo'
import Sidenav from './partial-components/Sidenav'
import Topnav from './partial-components/Topnav'
import Foot from './partial-components/Foot'

import { useThemeInitializer } from './context/useThemeInitializer'

const Frame = () => {
  const { theme } = useThemeInitializer()

  const isMedium = useMediaPredicate('(min-width: 860px)')
  const breakpoint = isMedium ? 'medium' : 'small'
  
  return (
    <BrowserRouter>
      <div className={`app-container ${breakpoint} ${theme}`}>
        <main>
          <header>
            <Logo />
            <Topnav />
          </header>
          <section>
            <Switch>
              <Suspense fallback={<LoadingMessage />}>
                <Route exact path='/' component={Home} />
                <Route exact path='/hotels' render={(props) => 
                  <Hotels {...props} theme={theme} />
                }/>
              </Suspense>
              <Route render={() => <h2>404 Page Not Found</h2>} />
            </Switch>
          </section>
          <footer>
            <Foot />
          </footer>
        </main>
        <Sidenav />
      </div>
    </BrowserRouter>
  )
}

export default Frame