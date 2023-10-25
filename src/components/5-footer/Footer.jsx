import  './footer.css';
const Footer = () => {
  return (
    (<footer className='flex'>

      <ul className='flex'>
      <li><a href="">About</a></li>
      <li><a href="">Projects</a></li>
      <li><a href="">Speaking</a></li>
      <li><a href="">Users</a></li>
      </ul>

      <p>created by <span style={{fontSize:'18px ', fontStyle:'italic'}}>Murtada Kodi</span>  @2024</p>
      
      
    </footer>)
    );
  
};

export default Footer;
