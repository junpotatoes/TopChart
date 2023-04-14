import { ThemeProvider } from 'styled-components';
import theme from './styles/theme.style';
import { GlobalStyle } from './styles/global.style';
import { Route, Routes } from 'react-router-dom';
import TopChart from './components/TopChart';
import TrackDetail from './components/TrackDetail';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<TopChart />} />
        <Route path="/track/:id" element={<TrackDetail />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
