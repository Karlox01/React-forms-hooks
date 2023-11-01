import css from './App.module.css';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import { SearchBar3 } from './components/SearchBar3';

function App() {
  return (
    <div className={css.App}>
      {/* <ControlledForm /> */}
      {/* <UncontrolledForm /> */}
      <SearchBar3 />
    </div>
  );
}

export default App;