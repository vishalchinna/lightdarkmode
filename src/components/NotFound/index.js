import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgHome = isDarkTheme ? 'darkHome' : 'lightHome'
      const text = isDarkTheme ? 'light' : 'dark'
      return (
        <div className={bgHome}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            alt="not found"
            className="icon"
          />
          <h1 className={text}>Lost Your Way?</h1>
          <p className={text}>
            We cannot to find the page you are looking for.
          </p>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
