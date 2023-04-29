import assasinsPng1 from "./images/assassins-png-1.png";
import assassins1 from "./images/assassins-background-1.png";
import assasinsTitle from "./images/assassins-logo.png";
import archerImg from "./images/wallpapersden.com_league-of-legends-archer_1080x1620.jpg";
import archerPng from "./images/League-Of-Legends-PNG-Images-HD.png";
import leaugeOfLegendsLogo from "./images/pngaaa.com-3489015.png";

export default function Cards() {
  return (
    <div className="cards">
      <div className="card">
        <div className="wrapper">
          <img src={assassins1} alt="" className="cover-image" />
        </div>
        <img src={assasinsTitle} alt="" className="title" />
        <img src={assasinsPng1} alt="" className="character" />
      </div>
      <div className="card">
        <div className="wrapper">
          <img src={archerImg} alt="" className="cover-image" />
        </div>
        <img src={leaugeOfLegendsLogo} alt="" className="title" />
        <img src={archerPng} alt="" className="character" />
      </div>
    </div>
  );
}
