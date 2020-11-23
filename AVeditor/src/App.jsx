import React, { useState, useEffect } from 'react';
import './App.css';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
const ffmpeg = createFFmpeg({ log: true });

function App() {
  const [ready, setReady] = useState(false);
  const [video, setVideo] = useState();
  const [gif, setGif] = useState();

  const load = async () => {
    await ffmpeg.load();
    setReady(true);
  };

  const convertToGif = async () =>{
    //write the file to the memory
    ffmpeg.FS('writeFile','xyz.mp4', await fetchFile(video))

    //Run the FFmpeg command
    await ffmpeg.run('-i','xyz.mp4','-t','2.5','-ss','2.0','-f','gif','abc.gif')

    //read the result
    const data = ffmpeg.FS('readFile','abc.gif')

    //create a url for preview
    const url = URL.createObjectURL(new Blob([data.buffer],{type:'image/gif'}));
    setGif(url)

  }
  useEffect(() => {
    load();
  }, []);
  // Return the App component.
  return (
    <div className="App">
      <h1>AV Editor Online</h1>
      {ready ? (
        <>
          <div className="preview">
            {video && (
              <video
                controls
                width="250"
                src={URL.createObjectURL(video)}
              ></video>
            )}
            <input
              type="file"
              onChange={(e) => setVideo(e.target.files?.item(0))}
            ></input>
          </div>
          <div className="options"> </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <h3>Output Gif </h3>
      <button onClick={convertToGif}>Create Gif</button>
      {gif && <img src={gif} width="250"/>}
    </div>
  );
}

export default App;
