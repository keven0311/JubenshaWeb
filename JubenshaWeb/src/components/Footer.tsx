import '../styles/Footer.css'

function Footer() {
  return (
    <div className="footer-div">
      <div className='footer-left'>
        <img className='wechat-sq-code-img' src='/wechat-sq-code.png' alt='Wechat SQ code'/>
      </div>
      <div className='footer-right'>
        <p>Tel:(222)333-4444</p>
        <p>Address: 2531 Chain Bridge Rd,</p>
        <p>2nd Fllor, Vienna, VA, 22181</p>
        <small>@2024 Infinity Space INC.</small>
      </div>
    </div>
  )
}

export default Footer