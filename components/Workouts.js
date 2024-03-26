import React from "react";
import { useEffect, useState } from "react";


export default function Workouts({navigation, route}) {
    const [user, setUser] = useState(null);
    const { imageURI } = route.params;
    const [results, setResults] = useState(null);

    // process with AI 
    // tells you what th item is 


    return (
        <div>
            <h1>Workouts</h1>
        </div>
    );
}
