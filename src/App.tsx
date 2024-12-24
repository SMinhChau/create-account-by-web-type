import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import NotificationProvider from './component/common/notify';
import AddAccount from './pages/add-account';
import VerifyEmail from './pages/verify';

const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <BaseLayout />,
  //   children: [
  //     {
  //       path: '/',
  //       element: <HomePage />,
  //     },
  //   ],
  // },
  {
    path: '/',
    element: <AddAccount />,
  },
  {
    path: '/verify-email',
    element: <VerifyEmail />,
  },
]);

function App() {
  return (
    <NotificationProvider>
      <RouterProvider router={router} />
    </NotificationProvider>
  );
}

export default App;
