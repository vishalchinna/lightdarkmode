import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgHome = isDarkTheme ? 'darkHome' : 'lightHome'
      const title = isDarkTheme ? 'darkTitle' : 'lightTitle'
      const image = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      return (
        <div className={bgHome}>
          <img src={image} alt="home" className="icon" />
          <h1 className={title}>Home</h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
