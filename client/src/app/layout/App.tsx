import { ThemeProvider } from '@emotion/react';
import { Container, createTheme, CssBaseline } from '@mui/material';
import { useState } from 'react';
import Catalag from '../../features/catalog/Catalag';
import Header from './Header';
import HomePage from './../../features/home/HomePage';
import { Route, Switch } from 'react-router-dom';
import ProductDetails from './../../features/catalog/ProductDetails';
import AboutPage from './../../features/about/AboutPage';
import ContactPage from './../../features/contact/ContactPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ServerError from './../errors/ServerError';
import NotFound from './../errors/NotFound';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212',
      },
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position='bottom-right' hideProgressBar theme='colored' />
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/catalog' component={Catalag} />
          <Route path='/catalog/:id' component={ProductDetails} />
          <Route path='/about' component={AboutPage} />
          <Route path='/contact' component={ContactPage} />
          <Route path='/server-error' component={ServerError} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </ThemeProvider>
  );
}

export default App;
