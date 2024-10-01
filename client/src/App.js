
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './components/courseDetails/CourseDetails';
import theme from './components/theme/theme';
import { CssBaseline } from '@mui/material';
import Page404 from './pages/404';


function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout/>}>
              <Route path='/' element={<Dashboard />} />
            </Route>
            <Route  path="*" element={<Page404/>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>

    </>
  );
}

export default App;
