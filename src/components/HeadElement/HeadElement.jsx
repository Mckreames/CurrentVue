import React from 'react';
import { Helmet } from 'react-helmet-async';

const HeadElement = () => {
    return (
        <Helmet>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>CurrentVue</title>
            <link
                rel="icon"
                href="imgs/currentvue-favicon-color.png"
                type="images/x-icon"
            />
        </Helmet>
    );
};

export default HeadElement;