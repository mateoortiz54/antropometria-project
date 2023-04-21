import {useRef, useEffect} from "react";

export const Video = ({video, setLoading}) => {
  const vidRef = useRef();

  useEffect(() => { vidRef.current.play(); },[]);

  return (
    <>
        <video
          ref={vidRef}
          muted
          autoPlay={"autoplay"}
          preload="auto"
          loop
          className="responsive-video"
          onLoadedData={() => setLoading(false)}
          src={`https://bodies-app.s3.amazonaws.com/videos/antropometria_app/${video}.mp4`}></video>
    </>
  )
}


