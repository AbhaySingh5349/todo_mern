import { CardList } from '../components/index';

import { Outlet } from 'react-router-dom'; // to be rendered in place where nested route content needs to be rendered

function App() {
  return (
    <div>
      <>
        <Outlet />
        <main>
          <CardList />
        </main>
      </>
    </div>
  );
}

export default App;

export async function loader() {
  const res = await fetch('http://localhost:8080/posts');
  const data = await res.json();
  return data; // data we want to expose to element that is rendered for active route
}
