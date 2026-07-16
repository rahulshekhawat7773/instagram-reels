import React, { useEffect, useRef, useState } from "react";
import { Heart, MessageCircle, Send } from "lucide-react";

function Reel({ src }) {
  const videoRef = useRef(null);

  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1);
  const [comments] = useState(0);

  const [showHeart, setShowHeart] = useState(false);

  const clickTimer = useRef(null);

  // Play only visible video
  useEffect(() => {
    const video = videoRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.8,
      }
    );

    if (video) {
      observer.observe(video);
    }

    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, []);

  // Single Click = Play/Pause
  // Double Click = Like
  const handleClick = () => {
    if (clickTimer.current) {
      clearTimeout(clickTimer.current);
      clickTimer.current = null;

      if (!liked) {
        setLiked(true);
        setLikes((prev) => prev + 1);
      }

      setShowHeart(true);

      setTimeout(() => {
        setShowHeart(false);
      }, 700);

      return;
    }

    clickTimer.current = setTimeout(() => {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }

      clickTimer.current = null;
    }, 250);
  };

  // Like Button
  const handleLike = (e) => {
    e.stopPropagation();

    if (liked) {
      setLiked(false);
      setLikes((prev) => prev - 1);
    } else {
      setLiked(true);
      setLikes((prev) => prev + 1);
    }
  };

  // Comment
  const handleComment = (e) => {
    e.stopPropagation();
    alert("No comments");
  };

  // Share
  const handleShare = (e) => {
    e.stopPropagation();

    if (navigator.share) {
      navigator.share({
        title: "Instagram Reel",
        text: "Check out this reel!",
        url: window.location.href,
      });
    } else {
      alert("Sharing not supported.");
    }
  };

  return (
    <div
      className="relative h-screen w-full snap-start bg-black"
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        src={src}
        loop
        playsInline
        className="w-full h-full object-cover"
      />

      {showHeart && (
        <Heart
          size={120}
          fill="white"
          color="white"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
        />
      )}

      {/* Right Side Buttons */}
      <div className="absolute right-4 bottom-24 flex flex-col items-center gap-5 text-white">

        <button onClick={handleLike}>
          <Heart
            size={34}
            fill={liked ? "red" : "none"}
            color={liked ? "red" : "white"}
          />
        </button>

        <p>{likes}</p>

        <button onClick={handleComment}>
          <MessageCircle size={34} />
        </button>

        <p>{comments}</p>

        <button onClick={handleShare}>
          <Send size={34} />
        </button>

      </div>

      {/* Bottom Left */}
      <div className="absolute bottom-6 left-4 text-white">
        <h2 className="font-bold">@rahul</h2>
        <p>New Reel </p>
        <p className="text-sm text-gray-300">Original Audio</p>
      </div>
    </div>
  );
}

export default Reel;