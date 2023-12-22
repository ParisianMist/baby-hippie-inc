import './App.scss';

import Header from '../src/components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className='main-body'>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path='/' element={<HomePage />} />
          <Route path='/video/:id' element={<HomePage />} />
          <Route path='/upload' element={<VideoUploadPage />} />
          <Route path='/*' element={<NotFoundPage />} /> */}
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
