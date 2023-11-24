import { NavLink } from 'react-router-dom';
import  './footer.css';
const Footer = () => {
  return (
    (<footer className='flex modal'>

      
        <ul className=''>
          
        <li><NavLink to="/site">Alzubara Site</NavLink></li>
        <li><NavLink to="/fort">Alzubara Fort</NavLink></li>
        <li><NavLink to="/emrair">Emrair</NavLink></li>
        <li><NavLink to="/near">Near</NavLink></li>
        </ul>
    

      <section>
        <p>created by  Murtada Kodi  @2023</p>
      </section>
      
      
    </footer>)
    );
  
};

export default Footer;
