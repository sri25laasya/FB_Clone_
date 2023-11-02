//import MainContent from './MainContent';
import MainContent from './MainContent';
function Container() {
	let shortcut1 = "Web Developers";
	let shortcut2 = "Web Design course";
	let shortcut3 = "Full Strack Development";
	let shortcut4 = "Website Experts";
	const leftEventData = [
		{ day: 30, month: "October" },
		{ day: 22, month: "June" }
	];

	const rightEventData = [
		{
			title: "Social Media",
			location: "Willson Tech Park",
			moreInfoLink: "#"
		},
		{
			title: "Mobile Marketings",
			location: "Willson Tech Park",
			moreInfoLink: "#"
		}
	];

	const adsImageUrl = "https://i.postimg.cc/CLXYx9BL/advertisement.png";

	const onlineUsers = [
		{
			imageUrl: "https://i.postimg.cc/XNPtfdVs/member-1.png",
			name: "Alison Mina"
		},
		{
			imageUrl: "https://i.postimg.cc/4NhqByys/member-2.png",
			name: "Jackson Aston"
		},
		{
			imageUrl: "https://i.postimg.cc/FH5qqvkc/member-3.png",
			name: "Samona Rose"
		},
		{
			imageUrl: "https://i.postimg.cc/Sx65bPcP/member-4.png",
			name: "Mike Pérez"
		}
	];

	return (
		<div className="container">
			{/*--------------Left Sidebar---------------------*/}
			<div className="left-sidebar">
				<div className="imp-links">
					<a href="#"><img src="https://i.postimg.cc/RCj4MjnC/news.png" />Latest News</a>
					<a href="#"><img src="https://i.postimg.cc/MpBwMtV0/friends.png" />Friendss</a>
					<a href="#"><img src="https://i.postimg.cc/44FRWj1b/group.png" />Group</a>
					<a href="#"><img src="https://i.postimg.cc/0jh39RtT/marketplace.png" />Marketplace</a>
					<a href="#"><img src="https://i.postimg.cc/VsXHCTVk/watch.png" />Watch</a>
					<a href="#">See More</a>
				</div>
				<div className="shortcut-link">
					<p>Your Shortcuts</p>
					<a href="#"><img src="https://i.postimg.cc/3JHVf7vG/shortcut-1.png" />{shortcut1}</a>
					<a href="#"><img src="https://i.postimg.cc/rFCbvb1P/shortcut-2.png" />{shortcut2}</a>
					<a href="#"><img src="https://i.postimg.cc/0yk3xfZ2/shortcut-3.png" />{shortcut3}</a>
					<a href="#"><img src="https://i.postimg.cc/Z5wQqdDP/shortcut-4.png" />{shortcut4}</a>
				</div>
			</div>
			{/*--------------Main Sidebar---------------------*/}
	  <MainContent />

			{/*--------------Right Sidebar---------------------*/}
			<div className="right-sidebar">
				<div className="sidebar-title">
					<h4>Events</h4>
					<a href="#">See All</a>
				</div>
				{leftEventData.map((event, index) => (
					<div className="event" key={index}>
						<div className="left-event">
							<h3>{event.day}</h3>
							<span>{event.month}</span>
						</div>
						<div className="right-event">
							<h4>{rightEventData[index].title}</h4>
							<p>
								<i className="fas fa-map-marker-alt" /> {rightEventData[index].location}
							</p>
							<a href={rightEventData[index].moreInfoLink}>More Info</a>
						</div>
					</div>
				))}
				<div className="sidebar-title">
					<h4>Advertisement</h4>
					<a href="#">close</a>
				</div>
				<img src={adsImageUrl} className="siderbar-ads" alt="Advertisement" />
				<div className="sidebar-title">
					<h4>Conversation</h4>
					<a href="#">Hide Chat</a>
				</div>
				{onlineUsers.map((user, index) => (
					<div className="online-list" key={index}>
						<div className="online">
							<img src={user.imageUrl} alt={`User ${index + 1}`} />
						</div>
						<p>{user.name}</p>
					</div>
				))}
			</div>
		</div>);
};
export default Container;