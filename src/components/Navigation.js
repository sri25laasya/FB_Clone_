// external dependencies
import React from 'react';

/** This is a functional component for the header of the application
 */
function Navigation(uName) {
	return (
						<nav>
							<div className="nav-left">
								<a href="Index.html">
									<img src="https://i.postimg.cc/Y9nZymQq/logo2.png" className="logo" />
								</a>
								<ul>
									<li><img src="https://i.postimg.cc/Fs3m1Djy/notification.png" /></li>
									<li><img src="https://i.postimg.cc/YqGKZ8nc/inbox.png" /></li>
									<li><img src="https://i.postimg.cc/xCzpgFjg/video.png" /></li>
								</ul>
							</div>
							<div className="nav-right">
								<div className="search-box">
									<img src="https://i.postimg.cc/SKtHgM6Q/search.png" />
									<input type="text" placeholder="Search" />
								</div>
								<div className="nav-user-icon online" onclick="settingsMenuToggle()">
									<img src="https://i.postimg.cc/cHg22LhR/profile-pic.png" />
								</div>
							</div>
							{/*--------------Settings Menu"---------------------*/}
							<div className="settings-menu">
								<div id="dark-btn">
									<span />
								</div>
								<div className="settings-menu-inner">
									<div className="user-profile">
										<img src="https://i.postimg.cc/cHg22LhR/profile-pic.png" />
										<div>
											<p>{uName.person1}</p>
											<a href="profile.js">See your profile</a>
										</div>
									</div>
									<hr />
									<div className="user-profile">
										<img src="https://i.postimg.cc/hv3nx52s/feedback.png" />
										<div>
											<p>Give Feedback</p>
											<a href="#">Help us to improve the new design</a>
										</div>
									</div>
									<hr />
									<div className="settings-links">
										<img src="https://i.postimg.cc/QCcPNYRV/setting.png" className="settings-icon" />
										<a href="#">Settings &amp; Privacy <img src="https://i.postimg.cc/RF1dBMWr/arrow.png" width="10px" /></a>
									</div>
									<div className="settings-links">
										<img src="https://i.postimg.cc/C5tydfK6/help.png" className="settings-icon" />
										<a href="#">Help &amp; Support<img src="https://i.postimg.cc/RF1dBMWr/arrow.png" width="10px" /></a>
									</div>
									<div className="settings-links">
										<img src="https://i.postimg.cc/5yt1XVSj/display.png" className="settings-icon" />
										<a href="#">Display &amp; Accessibility <img src="https://i.postimg.cc/RF1dBMWr/arrow.png" width="10px" /></a>
									</div>
									<div className="settings-links">
										<img src="https://i.postimg.cc/PJC9GrMb/logout.png" className="settings-icon" />
										<a href="#">Logout <img src="https://i.postimg.cc/RF1dBMWr/arrow.png" width="10px" /></a>
									</div>
								</div>
							</div>
						</nav>
						
				);
	}
export default Navigation;