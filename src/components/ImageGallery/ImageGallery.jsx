import { ImageCard } from '../ImageCard/ImageCard'
import styles from './styles.module.scss'

export const ImageGallery = ({ images }) => {
  return (
    <div className={styles.galleryWrapper}>
      {images.map((image, index) => (
        <ImageCard
          key={index}
          url={`https://picsum.photos/id/${image}/900/400`}
        />
      ))}
    </div>
  )
}
