import { Routes, Route } from 'react-router-dom';
import SharedLayout from '../components/SharedLayout/SharedLayout';
import Components from '../services/lazyComponents';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Components.Home />} />
        <Route path="contacts" element={<Components.Contacts />} />
        <Route path="register" element={<Components.Register />} />
        <Route path="login" element={<Components.Login />} />
        <Route path="*" element={<Components.Home />} />
      </Route>
    </Routes>
  );
}
