// Write your code here.
import './index.css'

const BannerCard = props => {
  const {bannerCardData} = props
  const {headerText, description, className} = bannerCardData
  return (
    <div className={`${className} banner-card-container`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="show-more-button" type="button">
          Show More
        </button>
      </div>
    </div>
  )
}

export default BannerCard
