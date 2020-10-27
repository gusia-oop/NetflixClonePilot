import React from 'react';
import { BrowseContainer } from '../containers/Browse';
import { useContent } from '../hooks';
import { selectionMap } from "../utils"

export default function Browse() {
    const { series } = useContent('series');
    const { films } = useContent('films');
    const slides = selectionMap({ series, films })

    console.log(series);
    console.log(films);
    
    return <BrowseContainer slides={slides}/>;
}