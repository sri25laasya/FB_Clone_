function profile() {
      return (
        <div>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title>Social Media</title>
          <meta name="description" content />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="style.css" />
          <nav>
            <div className="nav-left">
              <a href="Index.html">
                <img src="images/logo2.png" className="logo" />
              </a>
              <ul>
                <li><img src="images/notification.png" /></li>
                <li><img src="images/inbox.png" /></li>
                <li><img src="images/video.png" /></li>
              </ul>
            </div>
            <div className="nav-right">
              <div className="search-box">
                <img src="images/search.png" />
                <input type="text" placeholder="Search" />
              </div>
              <div className="nav-user-icon online" onclick="settingsMenuToggle()">
                <img src="images/profile-pic.png" />
              </div>
            </div>
            {/*--------------Settings Menu"---------------------*/}
            <div className="settings-menu">
              <div id="dark-btn">
                <span />
              </div>
              <div className="settings-menu-inner">
                <div className="user-profile">
                  <img src="images/profile-pic.png" />
                  <div>
                    <p>John Nicholson</p>
                    <a href="#">See your profile</a>
                  </div>
                </div>
                <hr />
                <div className="user-profile">
                  <img src="images/feedback.png" />
                  <div>
                    <p>Give Feedback</p>
                    <a href="#">Help us to improve the new design</a>
                  </div>
                </div>
                <hr />
                <div className="settings-links">
                  <img src="images/setting.png" className="settings-icon" />
                  <a href="#">Settings &amp; Privacy <img src="images/arrow.png" width="10px" /></a>
                </div>
                <div className="settings-links">
                  <img src="images/help.png" className="settings-icon" />
                  <a href="#">Help &amp; Support<img src="images/arrow.png" width="10px" /></a>
                </div>
                <div className="settings-links">
                  <img src="images/display.png" className="settings-icon" />
                  <a href="#">Display &amp; Accessibility <img src="images/arrow.png" width="10px" /></a>
                </div>
                <div className="settings-links">
                  <img src="images/logout.png" className="settings-icon" />
                  <a href="#">Logout <img src="images/arrow.png" width="10px" /></a>
                </div>
              </div>
            </div>
          </nav>
          {/*--------------Porfile page---------------------*/}
          <div className="pofile-container">
            <img src="images/cover.png" className="cover-img" />
            <div className="profile-details">
              <div className="pd-left">
                <div className="pd-row">
                  <img src="images/profile.png" className="pd-image" />
                  <div>
                    <h3>Jack Nicholson</h3>
                    <p>120 Friends - 20 mutual</p>
                    <img src="images/member-1.png" />
                    <img src="images/member-2.png" />
                    <img src="images/member-3.png" />
                    <img src="images/member-4.png" />
                  </div>
                </div>
              </div>
              <div className="pd-right">
                <button type="button"><img src="images/add-friends.png" /> Friends</button>
                <button type="button"><img src="images/message.png" /> Messages</button>
                <br />
                <a href><img src="images/more.png" /></a>
              </div>
            </div>
            <div className="profile-info">
              <div className="info-col">
                <div className="profile-intro">
                  <h3>Intro</h3>
                  <p className="intro-text">Believe in yourself and you can 
                    do unbelievable things <img src="images/feeling.png" /></p>
                  <hr />
                  <ul>
                    <li><img src="images/profile-job.png" /> Director at 99media Ltd</li>
                    <li><img src="images/profile-study.png" /> Studied at Amity University</li>
                    <li><img src="images/profile-study.png" /> Went to DPS Delhi</li>
                    <li><img src="images/profile-home.png" /> Lives in Bangalore, India</li>
                    <li><img src="images/profile-location.png" /> From Bangalore, India</li>
                  </ul>
                </div>
                <div className="profile-intro">
                  <div className="title-box">
                    <h3>Photos</h3>
                    <a href>All Photos</a>
                  </div>
                  <div className="photo-box">
                    <div><img src="images/photo1.png" /></div>
                    <div><img src="images/photo2.png" /></div>
                    <div><img src="images/photo3.png" /></div>
                    <div><img src="images/photo4.png" /></div>
                    <div><img src="images/photo5.png" /></div>
                    <div><img src="images/photo6.png" /></div>
                  </div>
                </div>
                <div className="profile-intro">
                  <div className="title-box">
                    <h3>Friends</h3>
                    <a href>All Friends</a>
                  </div>
                  <p>120 (10 Mutual)</p>
                  <div className="friends-box">
                    <div><img src="images/member-1.png" /> <p>Joseph N</p></div>
                    <div><img src="images/member-2.png" /> <p>Nathan N</p></div>
                    <div><img src="images/member-3.png" /> <p>George D</p></div>
                    <div><img src="images/member-4.png" /> <p>Francis L</p></div>
                    <div><img src="images/member-5.png" /> <p>Anthony E</p></div>
                    <div><img src="images/member-6.png" /> <p>Michael A</p></div>
                    <div><img src="images/member-7.png" /> <p>Edward M</p></div>
                    <div><img src="images/member-8.png" /> <p>Brandon C</p></div>
                    <div><img src="images/member-9.png" /> <p>James Doe</p></div>
                  </div>
                </div>
              </div>
              <div className="post-col">
                <div className="write-post-container">
                  <div className="user-profile">
                    <img src="images/profile-pic.png" />
                    <div>
                      <p>John Nicholson</p>
                      <small>Public <i className="fas fa-caret-down" /></small>
                    </div>
                  </div>
                  <div className="post-input-container">
                    <textarea rows={3} placeholder="What's on your mind, John?" defaultValue={""} />
                    <div className="add-post-links">
                      <a href="#"><img src="images/live-video.png" />Live Video</a>
                      <a href="#"><img src="images/photo.png" />Photo/Video</a>
                      <a href="#"><img src="images/feeling.png" />Feling/Activity</a>
                    </div>
                  </div>
                </div>
                <div className="post-container">
                  <dic className="post-row">
                    <div className="user-profile">
                      <img src="images/profile-pic.png" />
                      <div>
                        <p>John Nicholson</p>
                        <span>June 24 2021, 13:40 pm</span>
                      </div>
                    </div>
                    <a href="#"><i className="fas fa-ellipsis-v" /></a>
                  </dic>
                  <p className="post-text">Subscribe <span>@Easy Tutorials</span> Youtube Channel to watch more videos on 
                    website development and UI desings. <a href="#">#EasyTutorials</a> <a href="#">#YoutubeChannel</a></p>
                  <img src="images/feed-image-1.png" className="post-img" />
                  <div className="post-row">
                    <div className="activity-icons">
                      <div><img src="images/like-blue.png" />120</div>
                      <div><img src="images/comments.png" />45</div>
                      <div><img src="images/share.png" />20</div>
                    </div>
                    <div className="post-porfile-icon">
                      <img src="images/profile-pic.png" /><i className="fas fa-caret-down" />
                    </div>
                  </div>
                </div>
                <div className="post-container">
                  <dic className="post-row">
                    <div className="user-profile">
                      <img src="images/profile-pic.png" />
                      <div>
                        <p>John Nicholson</p>
                        <span>June 24 2021, 13:40 pm</span>
                      </div>
                    </div>
                    <a href="#"><i className="fas fa-ellipsis-v" /></a>
                  </dic>
                  <p className="post-text">Like and share this video with friends, tag<span>@Easy Tutorials</span>facebook page on your post.
                    Ask your dobuts in the comments. <a href="#">#EasyTutorials</a> <a href="#">#YoutubeChannel</a></p>
                  <img src="images/feed-image-2.png" className="post-img" />
                  <div className="post-row">
                    <div className="activity-icons">
                      <div><img src="images/like-blue.png" />120</div>
                      <div><img src="images/comments.png" />45</div>
                      <div><img src="images/share.png" />20</div>
                    </div>
                    <div className="post-porfile-icon">
                      <img src="images/profile-pic.png" /><i className="fas fa-caret-down" />
                    </div>
                  </div>
                </div>
                <div className="post-container">
                  <dic className="post-row">
                    <div className="user-profile">
                      <img src="images/profile-pic.png" />
                      <div>
                        <p>John Nicholson</p>
                        <span>June 24 2021, 13:40 pm</span>
                      </div>
                    </div>
                    <a href="#"><i className="fas fa-ellipsis-v" /></a>
                  </dic>
                  <p className="post-text">Like and share this video with friends, tag<span>@Easy Tutorials</span>facebook page on your post.
                    Ask your dobuts in the comments. <a href="#">#EasyTutorials</a> <a href="#">#YoutubeChannel</a></p>
                  <img src="images/feed-image-3.png" className="post-img" />
                  <div className="post-row">
                    <div className="activity-icons">
                      <div><img src="images/like-blue.png" />120</div>
                      <div><img src="images/comments.png" />45</div>
                      <div><img src="images/share.png" />20</div>
                    </div>
                    <div className="post-porfile-icon">
                      <img src="images/profile-pic.png" /><i className="fas fa-caret-down" />
                    </div>
                  </div>
                </div>
                <div className="post-container">
                  <dic className="post-row">
                    <div className="user-profile">
                      <img src="images/profile-pic.png" />
                      <div>
                        <p>John Nicholson</p>
                        <span>June 24 2021, 13:40 pm</span>
                      </div>
                    </div>
                    <a href="#"><i className="fas fa-ellipsis-v" /></a>
                  </dic>
                  <p className="post-text">Like and share this video with friends, tag<span>@Easy Tutorials</span>facebook page on your post.
                    Ask your dobuts in the comments. <a href="#">#EasyTutorials</a> <a href="#">#YoutubeChannel</a></p>
                  <img src="images/feed-image-4.png" className="post-img" />
                  <div className="post-row">
                    <div className="activity-icons">
                      <div><img src="images/like-blue.png" />120</div>
                      <div><img src="images/comments.png" />45</div>
                      <div><img src="images/share.png" />20</div>
                    </div>
                    <div className="post-porfile-icon">
                      <img src="images/profile-pic.png" /><i className="fas fa-caret-down" />
                    </div>
                  </div>
                </div>
                <div className="post-container">
                  <dic className="post-row">
                    <div className="user-profile">
                      <img src="images/profile-pic.png" />
                      <div>
                        <p>John Nicholson</p>
                        <span>June 24 2021, 13:40 pm</span>
                      </div>
                    </div>
                    <a href="#"><i className="fas fa-ellipsis-v" /></a>
                  </dic>
                  <p className="post-text">Like and share this video with friends, tag<span>@Easy Tutorials</span>facebook page on your post.
                    Ask your dobuts in the comments. <a href="#">#EasyTutorials</a> <a href="#">#YoutubeChannel</a></p>
                  <img src="images/feed-image-5.png" className="post-img" />
                  <div className="post-row">
                    <div className="activity-icons">
                      <div><img src="images/like-blue.png" />120</div>
                      <div><img src="images/comments.png" />45</div>
                      <div><img src="images/share.png" />20</div>
                    </div>
                    <div className="post-porfile-icon">
                      <img src="images/profile-pic.png" /><i className="fas fa-caret-down" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <p>Copyright 2022 - Vkive Tutorials</p>
          </div>
        </div>
      );
    }
export default profile;