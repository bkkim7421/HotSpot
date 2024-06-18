import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Row } from '../../atomic';

import { SideBar } from './SideBar';
import { SignUp } from '../SignUp';
import { SignIn } from '../SignIn';
import { MyPage } from '../MyPage';
import { MakeGroup } from '../MakeGroup';
import { SearchGroup } from '../SearchGroup';
import { Home } from '../Home';

function Layout() {
  return (
    <Row>
      <SideBar />
      <Outlet />
    </Row>
  );
}

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Home />}></Route>
          <Route path='mypage' element={<MyPage />}></Route>
          <Route path='makegroup' element={<MakeGroup />}></Route>
          <Route path='searchgroup' element={<SearchGroup />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
