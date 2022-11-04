import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import NavBar from './components/NavBar';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);



root.render(
  <StrictMode>
    <ChakraProvider>
    <ColorModeScript />

    {/* <Text
  bgGradient="linear(to-l, #7928CA, #FF0080)"
  bgClip="text" // background-clip: text
  fontSize="6xl" // font-size: theme.fontSizes.6xl => 3.75rem
  fontWeight="extrabold" // font-weight: theme.fontWeights.extrabold => 800
>
  Welcome to Chakra UI
</Text> */}
    <NavBar/>
    <App />
    </ChakraProvider>
    
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
