import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Error from './Components/Error/Error';
import Main from './Components/Layout/Main';
import Statistics from './Components/Statistics/Statistics';
import Test from './Components/Test/Test';
import Topics from './Components/Topics/Topic';


function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children:
        [{
          path: '/',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          }
          , element: <Topics></Topics>
        },
        {
          path: '/quiz/:quizId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          }
          , element: <Test></Test>
        }
          , {
          path: '/statistics',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          }
          , element: <Statistics></Statistics>
        },
        { path: '/blog', element: <Blog></Blog> }]
    }, {
      path: '/*', element: <Error></Error>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
