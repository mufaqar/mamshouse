import NextImage from 'next/image'
import styles from '../../styles/Image.module.css'

export default function OwnImage({url, alt}) {
  return (
    <>
      <div className={styles.imageContainer}>
        <NextImage src={url} alt={alt} className={styles.image}></NextImage>
      </div>
    </>
  )
}
