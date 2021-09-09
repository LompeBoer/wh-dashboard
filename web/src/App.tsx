import React from 'react';
import './App.css';
import Routes from './Routes'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Layout from './components/Layout'
import { HashRouter } from 'react-router-dom'

function App() {
    return (
        <HashRouter>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Layout>
                    <Routes />
                </Layout>
            </ThemeProvider>
        </HashRouter>
    );
}

export default App;
