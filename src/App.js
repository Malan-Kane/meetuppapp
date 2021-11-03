import { Route, Switch } from 'react-router-dom';

import AllMeetUpsPage from './pages/AMU';
import NewMeetUpsPage from './pages/NMU';
import FavoritesPage from './pages/Favs';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout >
      <Switch>
        <Route path='/' exact>
          <AllMeetUpsPage />
        </Route>
        <Route path='/new-mu'>
          <NewMeetUpsPage />
        </Route>
        <Route path='/favs'>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
