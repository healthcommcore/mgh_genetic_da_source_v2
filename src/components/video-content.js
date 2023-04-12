import React from "react";
import Card from "react-bootstrap/Card";
import LeftMarginContainer from "./left-margin-container";
import { exists } from "../helpers";

const VideoContent = ({ videoArr, caption, placeholder, cancer }) => {
  console.log(videoArr)
  console.log('------------------------')
  const getVideo = (arr, cancer) => {
    if (arr.length > 1) {
      console.log('dkhal')
      const cancerVid = arr.filter( (vidObj) => {
        const fileStr = vidObj.uri.url.split("/").pop().split("_").pop();
        console.log('------------1------------')
        console.log('fileStr')
        console.log(fileStr)
        const fileCancer = fileStr.slice(0, fileStr.indexOf("."));
        console.log('-------------2-----------')
        console.log('fileCancer')
        console.log(fileCancer)
        console.log('-------------2-----------')
        console.log('cancer')
        console.log(cancer.toLowerCase())
        return fileCancer === cancer.toLowerCase();
      });
      console.log(cancerVid)
      if(cancerVid[0] != undefined){
      return cancerVid[0].uri.url;}
    }
    return arr.length === 1 && arr[0].uri.url;
  /*
  */
  }

  if (placeholder && videoArr.length === 0) {
    return (
      <LeftMarginContainer>
        <img className="img-fluid" src={ process.env.DRUPAL_API_URL + placeholder.uri.url } />
        <Card bsPrefix="card video-caption">
          <Card.Body>
            <Card.Text>
              { caption }
            </Card.Text>
          </Card.Body>
        </Card>
      </LeftMarginContainer>
    );
  }

  const video = getVideo(videoArr, cancer);

  return (video) && (
    <LeftMarginContainer>
      <video controls poster={ process.env.DRUPAL_API_URL + placeholder.uri.url }>
        <source 
          src={ process.env.DRUPAL_API_URL + video }
          type="video/mp4"
        />
      </video>
      <Card bsPrefix="card video-caption">
        <Card.Body>
          <Card.Text>
            { caption }
          </Card.Text>
        </Card.Body>
      </Card>
    </LeftMarginContainer>
  );
}

export default VideoContent;
