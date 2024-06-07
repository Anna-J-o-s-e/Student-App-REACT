import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import DeleteStudent from './components/DeleteStudent';
import View from './components/View';

function App() {
  return (
    <div>
      <AddStudent />
      <SearchStudent />
      <DeleteStudent />
      <View/>
    </div>
  );
}

export default App;
