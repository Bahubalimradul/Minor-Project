import React from 'react';
import './BLogin.css';

// NavigationBar component
function NavigationBar() {
    return (
        <nav className="navbar">
            <div className="right">
                <image src="#" alt="logo" />
                <h1>CAMEO</h1>
            </div>

            <div className="left">
                <li><a href="#">Join us</a></li>
                <li><a href="#">Meet the Team</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">SignUp</a></li>
            </div>
        </nav>
    );
}

// Introduction component
function Introduction() {
    return (
        <div className="intro">
            <div className="intro-content">
                <h2>Welcome to CAMEO</h2>
                <p>Your gateway to college media.</p>
            </div>
            <div className="intro-img">
                <img src="../public\1.avif" alt="" srcset="" />
                <img src="../public\2.webp" alt="" srcset="" />
                <img src="../public\3.jpg" alt="" srcset="" />
                <img src="../public\4.jpg" alt="" srcset="" />
                <img src="../public\MITS-Gwalior.webp" alt="" srcset="" />
            </div>
        </div>
    );
}

// Weekly Newsletter component
function Newsletter() {
    return (
        <div className="newsletter">
            <h3>Subscribe to our Weekly Newsletter</h3>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
        </div>
    );
}

// Chat component
// function Chat() {
//   return (
//     <div className="chat-button">
//       <button>Chat</button>
//     </div>
//   );
// }

// Post component
// function CreatePost() {
//   return (
//     <div className="post-button">
//       <button>Create a Post</button>
//     </div>
//   );
// }

function Footer() {
    return (
      <div id="footer">
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">Privacy & Terms</a>
          </li>
        </ul>
        <div>
          <span>CAMEO Corporation © 2023</span>
        </div>
      </div>
    );
  }
  


function BLogin() {
    return (
        <div className="blogin">
            <NavigationBar />
            <Introduction />
            <Newsletter />
            {/* <Chat />
      <CreatePost /> */}
            <Footer />
        </div>
    );
}

export default BLogin;