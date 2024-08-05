import React from 'react'
import './Resources.css';
import news1 from './assets/news1..jpg';
import news2 from './assets/news2.jpeg';
import mission from './assets/newmission.webp';
import ongoingdonations from './assets/ongoingdonations.jpg';
import future from './assets/planforfuture.webp';
import results from './assets/results.jpg';
import help from './assets/helpcommunity.jpeg';
function Resources() {
  return (
    <div>
        <section className='resources-section1'>
            <div className='resources-div1'>
                <span className='news'>NEWS</span>
            </div>
        </section>
        <div className='card1'>
            <img src={mission} alt='New Mission' className='card1-image'></img>
            <div className="card1-content">
            <span style={{fontSize:20,color:'green',fontWeight:'bolder'}}>|</span>
            <span className='card1-head'>PROJECTS</span>
            <span className="card1-date">19 MAY</span>
            <h3 className="card1-title">New Mission</h3>
            <p className="card1-text">We're excited to announce our new mission: Empowering Change. By focusing on sustainable solutions through education, healthcare, and economic opportunities, we aim to create a brighter, more equitable future for all. Join us in making a lasting impact on communities worldwide.</p>
          </div>
        </div>
        <div className="card2">
      <img src={ongoingdonations} alt="Results Achieved" />
      <div className="text-block">
        <span style={{fontSize:20,color:'lightgreen',fontWeight:'bolder'}}>|</span>
        <span>Projects</span>
        <p>Ongoing Donations</p>
      </div>
    </div>
    <div className="card3">
      <img src={news1} alt="Results Achieved" />
      <div className="card3-text">
        <p>India’s rich are more willing to give: How philanthropy can tilt scales towards a more equitable society</p>
        <a href='https://indianexpress.com/article/opinion/columns/philanthropy-equitable-society-india-rich-9468581/' target='blank'>The Indian Express</a>
      </div>
    </div>
    <div className='card4'>
            <img src={future} alt='New Mission' className='card1-image'></img>
            <div className="card4-content">
            <span style={{fontSize:20,color:'green',fontWeight:'bolder'}}>|</span>
            <span className='card4-head'>PROJECTS</span>
            <span className="card4-date">19 MAY</span>
            <h3 className="card4-title">Plan for the Future</h3>
            <p className="card4-text">Secure a brighter tomorrow with our forward-thinking initiatives. We focus on long-term solutions that uplift communities, promote sustainability, and drive positive change. Together, we can create a future where everyone thrives. Join us in making a lasting impact for generations to come.</p>
          </div>
    </div>
    <div className="card5">
      <img src={news2} alt="Results Achieved" />
      <div className="card5-text">
        <p>Donate for a good cause, get tax benefit: Here is how to do that</p>
        <a href='https://www.business-standard.com/finance/personal-finance/donate-for-a-good-cause-get-tax-benefit-here-is-how-to-do-that-124012500644_1.html' target='blank'>Business Standards</a>
      </div>
    </div>
    <div className="card6">
      <img src={results} alt="Results Achieved" />
      <div className="card6-text">
        <span style={{fontSize:20,color:'lightgreen',fontWeight:'bolder'}}>|</span>
        <span>Projects</span>
        <p>Results Acheived</p>
      </div>
    </div>
    <div className='card7'>
            <img src={help} alt='New Mission' className='card7-image'></img>
            <div className="card7-content">
            <span style={{fontSize:20,color:'green',fontWeight:'bolder'}}>|</span>
            <span className='card7-head'>PROJECTS</span>
            <span className="card7-date">19 MAY</span>
            <h3 className="card7-title">Help the Community</h3>
            <p className="card7-text">Join us in making a positive impact by supporting initiatives that uplift and empower our community. Your contribution helps provide essential resources, education, and opportunities to those in need. Together, we can build a stronger, more compassionate community. Be the change that brings hope and progress to all.</p>
          </div>
    </div>
    </div>
  )
}

export default Resources