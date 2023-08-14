import './App.css'
import { ImageGallery } from './components/ImageGallery/ImageGallery'

const images = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']

function App() {
  return (
    <div>
      <h1>Image Gallery</h1>
      <ImageGallery images={images} />
    </div>
  )
}

export default App
