import css from './App.module.css';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import { SearchBar3 } from './components/SearchBar3';
import { SearchBar1 } from './components/SearchBar1';
import { SearchBar2 } from './components/SearchBar2';

function App() {
  return (
    <div className={css.App}>
      {/* <ControlledForm /> */}
      {/* <UncontrolledForm /> */}
      {/* <SearchBar1 />
      <SearchBar2 /> */}
      <SearchBar3 />
    </div>
  );
}

export default App;