import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar-div'>
        <div className='navbar-left'>
          <span className='logo-text'>GouTaoTao</span>
        </div>
        <div className='navbar-right'>
          <a className='navbar-right-link' href='/'>主页</a>
          <a className='navbar-right-link' href='/list'>剧本列表</a>
        </div>
        
    </div>
  )
}

export default Navbar