import React from "react";
import GoogleMaps from "simple-react-google-maps";
const Map = () =>{
    return <div>
        <GoogleMaps style={{height: "500px", width: "400px"}}
        zoom={5}
        center={{
            lat: 10.3445,
            lng: -1.4432,
        }
        }/>
    </div>
}
export default Map