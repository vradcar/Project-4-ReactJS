import React from 'react';
import './Header.css';


class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        animate: false,
      };
    }
  
    componentDidMount() {
      // Start animation after component is mounted
      setTimeout(() => {
        this.setState({ animate: true });
      }, 500); // Delay animation start by 0.5 seconds
    }
  
    render() {
      return (
        <header className={`header-container ${this.state.animate ? 'header-animate' : ''}`}>
          <div className="header-content">
            <div className="header-logo">
              <img src="https://cdn.discordapp.com/attachments/870538420953423912/1286141688439640064/ReactLogo.png?ex=66ecd449&is=66eb82c9&hm=1ceed27d2623e7777594708e7786f3302bcb966e6787c6be994619d4eb164d09&" alt="Logo" className="logo-image" />
            </div>
            <div className="header-text">
              <h1 className="header-title">G6 Project 4 Onboarding: React</h1>
              <p className="header-subtitle">&quot;Where Innovation Meets Creativity&quot;</p>
            </div>
            
          </div>
  
          {/* Moving background pictures */}
          
          <div className="moving-images">
            <img src="https://cdn.discordapp.com/attachments/870538420953423912/1286141688867192863/NodeLogo.png?ex=66ecd449&is=66eb82c9&hm=1639b9b6f2652b42a9e8da6380e51b927597dd597c60be158471f0a7df4a6b2d&" className="moving-image" alt="Moving 1" />
            <img src="https://cdn.discordapp.com/attachments/870538420953423912/1286141138767446016/NPMLogo.png?ex=66ecd3c6&is=66eb8246&hm=4dcb7aba4a871f780af46c920ead53d7326f71f4c962c28461d3c9c3fb5b69b6&" className="moving-image" alt="Moving 2" />
          </div>
        </header>
      );
    }
  }
  

export default Header;