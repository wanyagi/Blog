import React from 'react'; 
import path from 'path'; 
import fs from 'fs'; 
import ReactDOMServer from 'react-dom/server'; 
import { StaticRouter } from 'react-router-dom/server'; 
import App from '../../client/src/App'; 

const ssrControl = (request, response) => {
    const html = ReactDOMServer.renderToString(
        <StaticRouter location={request.url}>
          <App />
        </StaticRouter>
        
    ); 

    const templateFile = path.resolve('./build/index.html'); 
    fs.readFile(templateFile, 'utf-8', (error, data) => {
        if (error) {
            return response.status(500).send({"error" : error.message})
        } else {
            return response.send(data.replace('<div id="root"></div>', `<div id="root">${html}<div>`)); 
        }
    });
}; 

export { ssrControl }; 