import './App.css';
import { Container, Link, useMediaQuery } from '@mui/material';
import cloudsVideo from './assets/clouds.mp4'
import politicsLogo from './assets/politicsLogo.png'
import discordLogo from './assets/discord-footer.webp'
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

function App() {
  const matchesXL = useMediaQuery('(min-width:1920px)');
  return (
    <div className="App">
      <Container muted className='site-container' maxWidth={matchesXL ? 'xl' : 'md'} sx={{ px: 4, pt: 10, pb: 0 }}>
        <video className='videoBg' autoPlay loop muted>
          <source src={cloudsVideo} type='video/mp4' />
        </video>
        <div className='logo-container'>
          <img className='politics-logo' src={politicsLogo} alt='Politics Discord'></img>
        </div>

        <Container className='discord-container' maxWidth={'md'}>
          <a href="http://discord.gg/politics">
            <img className='discord-logo' src={discordLogo} alt="Join us on Discord"/>
          </a>
        </Container>
        <div className= 'footer'>
          <div className='socials'>
            <Link className='social-link' href="https://twitter.com/PoliticsServer">
              <TwitterIcon style={{fontSize: '3em'}} htmlColor='#fff'></TwitterIcon>
            </Link>
            <Link className='social-link' href="https://www.youtube.com/c/POLITICSDISCORDOFFICAL">
              <YouTubeIcon style={{fontSize: '3em'}} htmlColor='#fff'></YouTubeIcon>
            </Link>
          </div>
          <p className='copyright'>© 2023 Politics.gg</p>
        </div>
      </Container>
    </div>
  );
}

export default App;
