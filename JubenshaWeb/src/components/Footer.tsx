import '../styles/Footer.css'

function Footer() {
  return (
    <div className="footer-div">
      <div className='footer-left'>
        <img className='wechat-sq-code-img' src='/wechat-sq-code-new.png' alt='Wechat SQ code'/>
      </div>
      <div className='footer-right'>
        <p>Tel:(202)701-9391</p>
        <p>Address: 450 Maple Ave,</p>
        <p>E Suit #310, Vienna, VA</p>
        <small>@2024 Infinity Space INC.</small>
      </div>
    </div>
  )
}

export default Footer