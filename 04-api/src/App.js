import './App.css';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './Api';
import {useState} from 'react';

function App() {
  const [images, setImageList] = useState([]);

  const onSearchChange = async (term) => {
    const result = await searchImages(term);
    setImageList(result);
  }

  return (
    <div className="App">
      <div>Title</div>
      <SearchBar requestSearch = {onSearchChange}/>
      <ImageList images = {images}/>
    </div>
  );
}

export default App;
