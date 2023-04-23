import React from "react";
import "./PgVideo.css";
import img1 from './image/iphone14 pro.png';
import img2 from './image/Samsung s22ultrapng.png'
import img3 from './image/Huawe P50.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay as PlayIcon } from "@fortawesome/free-solid-svg-icons";
const PgVideo = ({content}) => {
  return (
    <div className="PgVideo">
      <section className="Texno-Tv">
        <div className="Tvtitle"> <p>TexnoPlus TV</p></div>
        <div className="Tvcontext">
        <div className="Tvhisse1">
            <div className="Video_item">
                <div className="Itemvideo">
                    <a href="https://www.youtube.com/watch?v=FT3ODSg1GFE&t=30s" target='_blank'><img src={img1} />
                    <div className="Play"><FontAwesomeIcon className="Playicon" icon={PlayIcon} /> </div></a>
                    <p>{content.Iphone} </p>
                </div>  
            </div>
        </div>
        <div className="">
            <div className="Tvhisse2">
            <div className="Video_item">
            <div className="Itemvideo">
                    <a href="https://www.youtube.com/watch?v=BSYsXVFzmKA" target='_blank'><img src={img2} />
                    <div className="Play"><FontAwesomeIcon  className="Playicon" icon={PlayIcon} /></div></a>
                    <p>{content.Samsung}</p>
                </div>
                </div>
            </div>
        </div>
        <div className="Tvhisse3">
            <div className="Video_item">
            <div className="Itemvideo">
                    <a href="https://www.youtube.com/watch?v=54tGywFswXs" target='_blank'><img src={img3} />
                    <div className="Play"><FontAwesomeIcon  className="Playicon" icon={PlayIcon} /></div></a>
                    <p>{content.Huawei}</p>
                </div>
            </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default PgVideo;
