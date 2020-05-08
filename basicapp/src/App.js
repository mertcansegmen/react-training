import React from 'react';
import './App.css';
import fb from "./images/facebook.png";
import wp from "./images/whatsapp.png";
import insta from "./images/instagram.png";

function App() {
    return (
        <>
        <header style={headerStyle}>
            <h2>Basic App</h2>
            <div style={headerButtonContainer}>
                <a href="https://google.com.tr" style={headerButton}>Homepage</a>
                <a href="https://google.com.tr" style={headerButton}>Profile</a>
                <a href="https://google.com.tr" style={headerButton}>About Us</a>
                <a href="https://google.com.tr" style={headerButton}>Contact</a>
            </div>
        </header>
        <div style={mainContent}>
            <div style={content}>
                <div style={fakeContent}>
                    Some content here
                </div>
                <div style={fakeContent}>
                    Another content
                    </div>
                <div style={fakeContent}>
                    Social media post maybe
                </div>
                <div style={fakeContent}>
                    X liked Y's photo 
                </div>
            </div>

            <div style={sideBar}>
                <div style={sideBarItemContainer}>
                <a href="https://google.com.tr" style={sideBarItem}><img style={logo} src={fb}/> Some stuff</a>
                </div>
                <div style={sideBarItemContainer}>
                <a href="https://google.com.tr" style={sideBarItem}><img style={logo} src={wp}/> Google actually</a>
                </div>
                <div style={sideBarItemContainer}>
                <a href="https://google.com.tr" style={sideBarItem}><img style={logo} src={insta} />They</a>
                </div>
                <div style={sideBarItemContainer}>
                <a href="https://google.com.tr" style={sideBarItem}><img style={logo} src={fb}/> All</a>
                </div>
                <div style={sideBarItemContainer}>
                <a href="https://google.com.tr" style={sideBarItem}><img style={logo} src={wp}/> Go to</a>
                </div>
                <div style={sideBarItemContainer}>
                <a href="https://google.com.tr" style={sideBarItem}><img style={logo} src={insta} />Google</a> 
                </div>
            </div>
        </div>
        </>
    );
}

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    background: "#333",
    color: "#fff",
    textAlign: "center",
    paddingLeft: "30px",
    paddingRight: "30px"
}

const headerButtonContainer = {
    display: 'flex',
    alignItems: 'center',
    background: "#333",
    color: "#fff",
    textAlign: "center",
}

const headerButton = {
    paddingLeft: "10px",
    paddingRight: "10px",
    textDecoration: "none",
    color: "white"
}

const mainContent = {
    display: "flex",
    flexDirection: "row",
    paddingLeft: "20%",
    paddingRight: "20%",
}

const content = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#aaa",
    width:"70%",
}

const sideBar = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "stretch",
    backgroundColor: "#555",
    width: "30%",
}

const sideBarItemContainer = {
    textAlign: "center",
    padding: "10px",
    borderBottom: "1px solid #777",
}

const sideBarItem = {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    textDecoration: "none",
    color: "white",
    fontWeight: "bold"
}

const fakeContent = {
    height: "300px",
    width: "95%",
    backgroundColor: "#444",
    margin: "10px",
    padding: "10px",
    borderRadius: "10px"
}

const logo = {
    width: "24px",
    height: "24px",
    marginRight: "8px"
}

export default App;
