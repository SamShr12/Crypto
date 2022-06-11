import {Navbar} from './components';
import {Welcome} from './components';
import {Services} from './components';
import {Transactions} from './components';
import {Footer} from './components';

const App = () => {

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
    </div>
  )
}

export default App;
