import { Link } from 'react-router'// links are used to load pages dynamically instead of refreshing, if a and href were to be used the page is reloaded and shown, which is not efficient for a asingle page to load a single content, just like youtube, has history, library, the content is shown dynamically without loading the page.
export default function Navbar(props) {

  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <Link className="navbar-brand" to="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">{props.aboutText}</Link>
      </li>
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
  <div className="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline1" name="customRadioInline" className="custom-control-input" onClick={() => props.changeColor('#c20c1e')}/>
  <label className="custom-control-label" htmlFor="customRadioInline1">Red</label>
</div>
<div className="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline2" name="customRadioInline" className="custom-control-input" onClick={() => props.changeColor('#040b8a')}/>
  <label className="custom-control-label" htmlFor="customRadioInline2">Blue</label>
</div>
<div className="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline3" name="customRadioInline" className="custom-control-input" onClick={() => props.changeColor('#087515')}/>
  <label className="custom-control-label" htmlFor="customRadioInline3">Green</label>
</div>
<div className="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline4" name="customRadioInline" className="custom-control-input" onClick={() => props.changeColor('#75086a')}/>
  <label className="custom-control-label" htmlFor="customRadioInline4">Purple</label>
</div>
  <div className={`custom-control custom-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
  <input type="checkbox" className="custom-control-input" onClick={props.toggleMode} id="customSwitch1"/>
  <label className="custom-control-label" htmlFor="customSwitch1">Enable DarkMode</label>
</div>
</nav>
  )
}
