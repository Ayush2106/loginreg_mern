// import React from 'react'
// import PropTypes from 'prop-types'
// import React, { useState } from 'react'

// export default function Navbar(props) {
//   const [mode, setmode] = useState('light');
//   const  [btnText, setbtnText] = useState("Enable Light Mode")

//   const toggleMode =()=>{
//  if (mode === "dark"){
//    setmode("light");
//    setbtnText("Enable DARK mODE")

//  }else {
//   setmode("dark");
//   setbtnText("Enable light mODE")

//  }
//   }
//     return (
  
//         <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
//   <div className="container-fluid">
//     <a className="navbar-brand" href="/">{props.title}</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="/">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/">{props.Link}</a>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a className="dropdown-item" href="/">Action</a></li>
//             <li><a className="dropdown-item" href="/">Another action</a></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><a className="dropdown-item" href="/">Something else here</a></li>
//           </ul>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link disabled">Disahmnhjbled</a>
//         </li>
//       </ul>
//       <form className="d-flex">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>
//       <div class="form-check form-switch mx-5" >
//   <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
//   <label class="form-check-label" onClick = {toggleMode} htmlfor="flexSwitchCheckDefault">{btnText}</label>
// </div>
//     </div>
//   </div>
// </nav>
//     )
// }
// Navbar.propTypes = {
//     title : PropTypes.string.isRequired
// }
// Navbar.defaultProps={
//     title : 'set title here'
    
// };




import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.aboutText}</a>
                        </li>
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button cla
                        ssName="btn btn-primary" type="submit">Search</button>
                    </form> */}
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
  };