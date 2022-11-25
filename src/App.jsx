import { connect, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Counter from './components/Counter';
import CounterActions from './components/CounterActions';
import Footer from './components/Footer';
import Header from './components/Header';
import { routes } from './routes';

const mapStateToProps = state => ({
  dark: state.site.dark,
  user: state.auth.user,
});

function App({ dark, user }) {
  // const { dark } = useSelector(state => state.site);
  // const { user } = useSelector(state => state.auth);

  // console.log(routes);

  return (
    <BrowserRouter>
      <div className={dark ? 'dark' : 'light'}>
        <Header />
        {/* <Counter /> */}
        {/* <CounterActions /> */}
        <Routes>
          {routes.map((route, i) => {
            // console.log(route.path);
            // console.log(route.component);
            return (
              <Route
                exact={route.exact}
                key={i}
                path={route.path}
                element={
                  !(route.auth && !user) ? (
                    <route.component />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
            );
          })}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default connect(mapStateToProps)(App);
