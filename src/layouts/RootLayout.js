import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const RootLayout = () => {
  return (
    <>
      <header>
          <Header />
      </header>
      <main>
          <Outlet />
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
}

export default RootLayout;
