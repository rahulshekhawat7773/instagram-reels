import Reel from "../component/reel";

const videos = [
  "/1.mp4",
  "/2.mp4",
  "/3.mp4",
  "/4.mp4",
  "/5.mp4",
  "/6.mp4",
  "/7.mp4",
  "/8.mp4",
  "/9.mp4",
  "/10.mp4",
  "/11.mp4",
  "/12.mp4",
  "/13.mp4",
];

function Videos() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {videos.map((video, index) => (
        <Reel key={index} src={video} />
      ))}
    </div>
  );
}

export default Videos;