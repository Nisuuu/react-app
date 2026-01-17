import React from 'react';
import Card from './Components/Card';

const App = () => {
  return (
    <div className="parent">

      <Card
        name="Nisha Adhikari"
        image="https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?q=80&w=1972&auto=format&fit=crop"
        description="Frontend developer who loves clean UI."
        
      />

      <Card
        name="Riya Sharma"
        image="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
        description="Creative designer with modern ideas."
      />

      <Card
        name="Aman Thapa"
        image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
        description="Full stack developer and tech enthusiast."
      />

      <Card
        name="Sita Karki"
        image="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
        description="UX researcher who understands user behavior."
      />
    </div>
  );
};

export default App;
