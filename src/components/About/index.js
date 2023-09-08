import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgHome = isDarkTheme ? 'darkHome' : 'lightHome'
      const title = isDarkTheme ? 'darkTitle' : 'lightTitle'
      const image = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      return (
        <div className={bgHome}>
          <img src={image} alt="about" className="icon" />
          <h1 className={title}>About</h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
