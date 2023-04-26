import { Main, View } from 'pages';
import NotFound from 'pages/not-found';
import { Route, Routes } from 'react-router';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/view/:id' element={<View />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
