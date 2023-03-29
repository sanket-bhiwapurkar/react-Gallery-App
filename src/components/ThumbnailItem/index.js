import './index.css'

const ThumbnailItem = props => {
  const {eachImage, selectThumbnail, isSelected} = props
  const {thumbnailUrl, thumbnailAltText} = eachImage

  const onSelect = () => {
    selectThumbnail(eachImage)
  }
  const selectedThumbnailClassName = isSelected ? 'selected' : ''

  return (
    <li>
      <button type="button" onClick={onSelect} className="thumbnail-btn">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail ${selectedThumbnailClassName}`}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
