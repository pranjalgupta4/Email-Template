import { useState } from 'react'
import './App.scss'

function App() {
  // Sample data - in real app these would come from props or API
  const data = {
    name: "John Doe",
    loginUrl: "https://bits-apogee.org/login",
    username: "john.doe",
    password: "ap0g33_2025",
    contactNumber: "+91-9876543210"
  }

  return (
    <div className="email-container">
      <div className="email-content">
        <pre className="email-text">
          <div className="greeting">Hello {data.name}!</div>

          <p>Thank you for registering!</p>

          <p>Greetings from BITS Pilani!</p>

          <p>
            It gives me immense pleasure in inviting your institute to the 43rd edition of APOGEE, 
            the annual technical fest of Birla Institute of Technology & Science, Pilani, India. 
            This year, APOGEE will be held from 28th March to 31st March.
          </p>

          <p>
            This is to inform you that you have been selected as the College Representative for your college.
            You can now login <a href={data.loginUrl} className="login-link">here</a> using the following credentials:
          </p>

          <div className="credentials">
            <p>username: '{data.username}'</p>
            <p>password: '{data.password}'</p>
          </div>

          <p>
            We would be really happy to see your college represented at our fest.
            It is your responsibility to confirm the participants for different events.
          </p>

          <p>We look forward to seeing you at APOGEE 2025.</p>

          <div className="ps-note">
            P.S: THIS EMAIL DOES NOT CONFIRM YOUR PRESENCE AT APOGEE 2025. 
            YOU WILL BE RECEIVING ANOTHER EMAIL FOR THE CONFIRMATION OF YOUR PARTICIPATION.
          </div>

          <div className="signature">
            <p>Regards,</p>
            <p>Harnoor Singh</p>
            <p>CoStAAn (Head)</p>
            <p>Dept. of Publications & Correspondence, APOGEE 2025</p>
            <p>BITS Pilani</p>
            <p>pcr@bits-apogee.org</p>
            <p>{data.contactNumber}</p>
          </div>

          <div className="important-note">
            <strong>NOTE</strong>
            PLEASE KEEP CHECKING YOUR SPAM FOLDER AS WELL FOR FURTHER UPDATES.
          </div>
        </pre>
      </div>
    </div>
  )
}

export default App