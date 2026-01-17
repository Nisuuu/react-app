import Card from './Components/Card';
const App = () => {
  const profiles = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKq6hs1h9k4AszlOdOowMEDFfaHXTtqqYdUw&s",
      name: "Nisha Adhikari",
      role: "Web Developer",
      bio: "Passionate about creating beautiful and functional websites. Always learning and exploring new technologies."
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSK5TAtmcluu-bMDlLuEOQwHWRR1YuoXKJbA&s",
      name: "Sita Karki",
      role: "UI/UX Designer",
      bio: "Designing intuitive user experiences with clean and minimal interfaces."
    },
    {
      image: "https://i.pinimg.com/736x/fc/f6/28/fcf6287ec439efd84281c8c29787e8bd.jpg",
      name: "Ram Thapa",
      role: "Frontend Engineer",
      bio: "Specialized in React and modern JavaScript frameworks."
    },
    {
      image: "https://i.pinimg.com/736x/b9/c9/84/b9c9842ae604dc9231b740dde34fa139.jpg",
      name: "Krishna Oli",
      role: "Product Designer",
      bio: "Turning complex problems into elegant design solutions."
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhaTTHYe3pq6RYazy_xpEmcmxHs1TbwE2ffQ&s",
      name: "Aman Shrestha",
      role: "Full Stack Developer",
      bio: "Building scalable apps from backend to frontend."
    }
  ];

  return (
    <div className="profile-parent">
      {profiles.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              image={elem.image}
              name={elem.name}
              role={elem.role}
              bio={elem.bio}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
