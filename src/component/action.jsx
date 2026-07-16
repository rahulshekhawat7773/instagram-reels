import React, { useState } from "react";
import { Heart, MessageCircle, Send } from "lucide-react";

function Actions() {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="absolute right-4 bottom-24 flex flex-col items-center gap-6 text-white">

      <button onClick={handleLike}>
        <Heart
          size={34}
          fill={liked ? "red" : "none"}
          color={liked ? "red" : "white"}
        />
      </button>

      <p>{likes}</p>

      <button>
        <MessageCircle size={34} />
      </button>

      <button>
        <Send size={34} />
      </button>

    </div>
  );
}

export default Actions;