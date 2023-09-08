import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {toggleTheme, isDarkTheme} = value
      const bgNavbar = isDarkTheme ? 'darkNavbar' : 'lightNavbar'
      const tags = isDarkTheme ? 'darkTags' : 'lightTags'
      const logo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const btnLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <div className={bgNavbar}>
          <img src={logo} alt="website logo" className="logo" />
          <ul className="tag-links">
            <li>
              <Link to="/" className={tags}>
                Home
              </Link>
            </li>
            <li>
              <Link className={tags} to="/about">
                About
              </Link>
            </li>
          </ul>
          <button
            type="button"
            data-testid="theme"
            onClick={toggleTheme}
            className="theme-btn"
          >
            <img src={btnLogo} alt="theme" className="logo" />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
