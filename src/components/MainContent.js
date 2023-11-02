import React from 'react';
const storyData = [
  {
    imageUrl: "https://i.postimg.cc/TPh453Zz/upload.png",
    name: "Post Story"
  },
  {
    imageUrl: "https://i.postimg.cc/XNPtfdVs/member-1.png",
    name: "Alison"
  },
  {
    imageUrl: "https://i.postimg.cc/4NhqByys/member-2.png",
    name: "Jackson"
  },
  {
    imageUrl: "https://i.postimg.cc/FH5qqvkc/member-3.png",
    name: "Samona"
  },
  {
    imageUrl: "https://i.postimg.cc/Sx65bPcP/member-4.png",
    name: "John Doe"
  }
];

const postData = [
  {
    user: "John Nicholson",
    timestamp: "June 25 2021, 12:40 pm",
    text: "Subscribe @Vkive Tutorials Youtube Channel to watch more videos on website development and UI designs. #VkiveTutorials #YoutubeChannel",
    imageUrl: "https://i.postimg.cc/9fjhGTY6/feed-image-1.png",
    likes: 125,
    comments: 45,
    shares: 20
  },
  {
    user: "John Nicholson",
    timestamp: "June 24 2021, 13:40 pm",
    text: "Subscribe @Vkive Tutorials Youtube Channel to watch more videos on website development and UI designs. #VkiveTutorials #YoutubeChannel",
    imageUrl: "https://i.postimg.cc/tJ7QXz9x/feed-image-3.png",
    likes: 195,
    comments: 47,
    shares: 26
  },
  {
    user: "John Nicholson",
    timestamp: "June 23 2021, 13:40 pm",
    text: "Subscribe @Vkive Tutorials Youtube Channel to watch more videos on website development and UI designs. #VkiveTutorials #YoutubeChannel",
    imageUrl: "https://i.postimg.cc/Xvc0xJ2p/feed-image-2.png",
    likes: 195,
    comments: 47,
    shares: 26
  },
];

const Post = ({ user, timestamp, text, imageUrl, likes, comments, shares }) => {
  return (
    <div className="post-container">
      <div className="post-row">
        <div className="user-profile">
          <img src="https://i.postimg.cc/cHg22LhR/profile-pic.png" />
          <div>
            <p>{user}</p>
            <span>{timestamp}</span>
          </div>
        </div>
        <a href="#"><i className="fas fa-ellipsis-v" /></a>
      </div>
      <p className="post-text">
        {text}
      </p>
      <img src={imageUrl} className="post-img" />
      <div className="post-row">
        <div className="activity-icons">
          <div><img src="https://i.postimg.cc/pLKNXrMq/like-blue.png" />{likes}</div>
          <div><img src="https://i.postimg.cc/rmjMymWv/comments.png" />{comments}</div>
          <div><img src="https://i.postimg.cc/T2bBchpG/share.png" />{shares}</div>
        </div>
        <div className="post-porfile-icon">
          <img src="https://i.postimg.cc/cHg22LhR/profile-pic.png" /><i className="fas fa-caret-down" />
        </div>
      </div>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="story-gallery">
        {storyData.map((story, index) => (
          <div className={`story story${index + 1}`} key={index}>
            <img src={story.imageUrl} alt={`Story ${index + 1}`} />
            <p>{story.name}</p>
          </div>
        ))}
      </div>
      <div className="write-post-container">
        {/* Write Post Component */}
        <div className="user-profile">
                        <img src="https://i.postimg.cc/cHg22LhR/profile-pic.png" />
                        <div>
                            <p>John Nicholson</p>
                            <small>Public <i class="fas fa-caret-down"></i></small>
                        </div>
                    </div>
                    <div className="post-input-container">
                        <textarea rows="3" placeholder="What's on your mind, John?"></textarea>
                        <div className="add-post-links">
                            <a href="#"><img src="https://i.postimg.cc/QMD2BDXs/live-video.png" />Live Video</a>
                            <a href="#"><img src="https://i.postimg.cc/6pKKZn0D/photo.png" />Photo/Video</a>
                            <a href="#"><img src="https://i.postimg.cc/Pf6TBCdD/feeling.png" />Feling/Activity</a>
                        </div>
                    </div>
      </div>
      {postData.map((post, index) => (
        <Post
          key={index}
          user={post.user}
          timestamp={post.timestamp}
          text={post.text}
          imageUrl={post.imageUrl}
          likes={post.likes}
          comments={post.comments}
          shares={post.shares}
        />
        

      ))}
      <button type="button" className="load-more-btn">
        Load More
      </button>
    </div>
  );
};

export default MainContent;
