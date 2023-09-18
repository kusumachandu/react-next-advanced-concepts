import './App.css';
import Card from './components/Card';

function App() {

  const blogPosts = [
    {
      title: 'Lorem Ipsum Dolor Sit Amet',
      author: 'John Doe',
      date: 'September 17, 2023',
      image: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ipsum eu ipsum...',
    },
    {
      title: 'Lorem Ipsum Dolor Sit Amet',
      author: 'John Doe',
      date: 'September 17, 2023',
      image: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ipsum eu ipsum...',
    },
    {
      title: 'Lorem Ipsum Dolor Sit Amet',
      author: 'John Doe',
      date: 'September 17, 2023',
      image: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ipsum eu ipsum...',
    },
    {
      title: 'Lorem Ipsum Dolor Sit Amet',
      author: 'John Doe',
      date: 'September 17, 2023',
      image: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ipsum eu ipsum...',
    },
  ]

  return (
    <div className="App">
      <h1 className='uppercase text-lg font-bold'>Blog Card</h1>
      <div className='grid grid-cols-4 px-8 mt-4'>
      {
        blogPosts.map((posts, index) => (
          <div key={index} className=''>
            <Card {...posts} />
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default App;
