import { useState } from "react";
import React from "react";

import { TabInfoOne } from "../Tabs/TabInfoOne";
import { TabInfoTwo } from "../Tabs/TabInfoTwo";
import { TabInfoThree } from "../Tabs/TabInfoThree";
import { Video } from "../Video/Video";
import Tabs from "../Tabs/Tabs";
import CarouselFadeExample from "../Carousel/Carousel";




function Knitting() {
    const [activeTab, setActiveTab] = useState(0);
    return(
        <div>
            <div className="container">
                <h1>Knitting</h1>
            </div>
            <div className="container">
                <Video />
            </div>

            <div className="container">
            <Tabs setActiveTab={setActiveTab}/>
           {activeTab === 0 && <TabInfoOne />}
           {activeTab === 1 && <TabInfoTwo />}
           {activeTab === 2 && <TabInfoThree />}
           </div>
            <div>
                <h2>Types of knitting</h2>
            </div>
            <div className="container">
                <CarouselFadeExample />
            </div>
          


        </div>
    )
}
export default Knitting;