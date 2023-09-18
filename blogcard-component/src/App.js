import './App.css';
import Card from './components/Card';

function App() {

  const blogPosts = [
    {
      title: 'Lorem Ipsum Dolor Sit Amet',
      author: 'John Doe',
      date: 'September 17, 2023',
      image: 'https://via.placeholder.com/300',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ipsum eu ipsum...',
    },
  ]

  return (
    <div className="App">
      <h1 className='uppercase text-lg font-bold'>Blog Card</h1>
      <div>
        <Card />
      </div>
    </div>
  );
}

export default App;
