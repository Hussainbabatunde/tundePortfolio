import logo from './logo.svg';
import './App.css'
import { useRef } from 'react';

function App() {

  const skilsSet = ['HTML', 'CSS', 'Javascript', 'React', 'React Native', 'Tailwind', 'Chakra UI', 'Material UI', 'Redux Toolkit', 'Redux', 'Tailwind CSS', 'Python', 'Supabase']
  const experience= [
    {
    name: 'Software Developer(Frontend web and mobile developer)',
    company:'BCT Limited - Fulltime',
    date:'Jan 2022 - Present',
    duties:[' Coollaborated effectively with a team of engineers to develop a robust web app (Learning Management System), a platform provides users with the opportunity to enroll in digital courses tailored to their professional goals, all while offering convenient payment options to streamline the registration process and unique feature of one-on-one sessions with experienced tutors. Application was completed using React, CSS, Redux and Rest API.',
            'Coollaborated effectively with a team of engineers to develop a robust web app (Solvate Africa), a freelancing website where users can post jobs and talents can apply for the posted jobs. Application was completed using React, CSS, react bootstrap, Redux and Rest API which currently has over 500 users.',
            'website where users can post jobs and talents can apply for the posted jobs. Application was completed using React, CSS, react bootstrap, Redux and Rest API which currently has over 500 users.',
          'Translated UX and business requirements into elegant code solutions with responsive web design projects in React framework' ]
  }]

  const videoPortfolioExperience = [
    {
      name: 'Solvate Africa',
      descTitle: 'A freelancing website where users can post jobs so talents that are on the platform can apply for the jobs.',
      stacks: ['Javascript' ,'React'],
      links:"https://www.solvateafrica.com/",
      video: require('./assests/Solvate Africa.mp4')
    },
    {
      name: 'Learning Management System',
      descTitle:'A learning management system where users can lookup available courses, enrol for the courses and have access to the learn their desired courses. ',
      stacks: ['Javascript', 'React'],
      links: "https://www.mywebschools.com/",
      video: require('./assests/BCT.mp4')
    },
    {
      name: 'SmoothRide',
      descTitle:'A cooperate logistics application where users can request for a ride and a driver is assigned to the user to carry out the request',
      stacks: ['Javascript', 'React Native'],
      playstore: "https://play.google.com/store/apps/details?id=com.bcodestech.smfirstapp",
      video: require('./assests/Smoothride.mp4')
    },
    {
      name: 'Popat',
      descTitle:'An event ticketing system where a vendor can create events and users are allowed to buy tickets to the events created. ',
      stacks: ['Javascript', 'React Native'],
      playstore: "https://play.google.com/store/apps/details?id=com.bcodestech.smfirstapp",
      video: require('./assests/Popat.mp4'),
      appstore: 'https://apps.apple.com/us/app/popat/id6463745179'
    }
  ]

  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  const introRef = useRef(null);
  const handleIntroRefClick = () => {
    introRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  const projectRef = useRef(null);
  const handleProjectRefClick = () => {
    projectRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  const skillsRef = useRef(null);
  const handleSkillsRefClick = () => {
    skillsRef.current?.scrollIntoView({behavior: 'smooth'});
  };


  return (
    <div className="portfolioBg">
      <div className='portfolioHeader'>
        <div>
          <a target='_blank' href='https://github.com/Hussainbabatunde'><img width='25px' src={require('./assests/github.png')} /></a>
          <a target='_blank' href='https://www.linkedin.com/in/babatunde-hussain-9a1841134/' style={{marginLeft:'15px'}}><img width='25px' src={require('./assests/linkedin.png')} /></a>
        </div>
        <a target='_blank' href={require('./assests/babatundeCV.pdf')} className='portfolioResume'>RESUME</a>
      </div>
      <section ref={introRef} className='portfolioSec1'>
        <img src={require('./assests/circleProfile.png')} className='circleHeader' />
        <div className='userPicAbout'>
          <img src={require('./assests/me.jpg')} className='individualPic'/>
          <p className='userPortfolioName'>HUSSAIN BABATUNDE</p>
          <p className='usePortfolioDesc'>FRONT-END WEB & MOBILE DEVELOPER</p>
          <div className='userPortfolioTextDesc'>
          <p>Welcome to my Portfolio! I'm Babatunde Hussain a graduate 🎓 from the department of Electrical and Electronics Engineering, University of Lagos. An Experienced frontend developer specializing in web and mobile development, committed to creating user-friendly and captivating applications. Dedicated to continuous improvement and constantly seeking opportunities to enhance skills and expertise.</p>
          <p style={{marginTop:'10px'}}>A skilled problem solver, employing innovative thinking for optimal solutions. Extensive project experience that has refined abilities and honed skills. Strong team player, promoting collaboration and effective communication. Proficient at conveying complex technical concepts clearly and concisely.</p>
        </div>
        <div className='portfolioSkillsDiv'>
          <div className='innerSkillsDiv'>
          <button onClick={handleIntroRefClick} className='portfolioSkillButton'>INTRO</button>
          <button onClick={handleSkillsRefClick} className='portfolioSkillButton'>SKILLS</button>
          <button onClick={handleClick}  className='portfolioSkillButton'>EXPERIENCE</button>
          <button onClick={handleProjectRefClick} className='portfolioSkillButton'>PROJECTS</button>
          </div>
        </div>
        </div>
      </section>
        <section ref={skillsRef} className='portfolioSkillSets'>
          <p className='skillSetsText'>SKILL SETS</p>
          <div className='skillImgAndName'>
            <div className='SkillDescText'>
              {skilsSet.map ((each, index)=><p key={index} className='SkillTextWord'>{each}</p>)}
            </div>
            <div>
            <img src={require('./assests/react.png')} className='ImgSkill' />
            <img src={require('./assests/saas.png')} className='ImgSkill' />
            <img src={require('./assests/dots.png')} className='Imgdots' />
            </div>
          </div>
        </section>

        
        <section  ref={ref} className='portfolioExperience'>
          <p className='skillSetsText'>EXPERIENCE</p>
          <div className='experienceHolder'>
            {experience?.map((each, index)=>(
            <div key={index} className='experienceHolder_div'>
              <p className='experienceCompany_Role'>{each?.name}</p>
              <p className='experienceCompany'>{each?.company}</p>
              <p className='experienceCompany_startDate'>{each?.date}</p>
              {each?.duties?.map((item, itemIndex)=>
              <div key={itemIndex} style={{marginTop:'20px', marginLeft: '30px', display:'flex'}}>
                <div style={{backgroundColor:'white', padding:'2px 1.5px', width: '2px', marginRight:'15px', height:'1px', marginTop: '10px'}}></div>
                <p style={{color:'white', fontWeight: 500}}>{item}
                  </p>
              </div>)}
              <img src={require('./assests/CodeBlock.png')} className='experience_codeBlock'/>
            </div>))}
            <img src={require('./assests/stairs.png')} style={{position:'absolute', top: '30%', left: 0, width:'200px', height:'200px'}} />
            <img src={require('./assests/box.png')} style={{position:'absolute', bottom:'-90px', right: '10%', width:'150px', height:'150px'}} />
          </div>
        </section>

        
        <section ref={projectRef} className='portfolioExperience'>
          <p className='skillSetsText'>PROJECTS</p>
          {videoPortfolioExperience?.map((each, index)=>
          <div key={index} className='videoAndPortfolio'>
          <video className='videoPortfolio' autoPlay playsInline muted loop>
            <source  src={each?.video} type="video/mp4"/>
          </video>
          <div className='descVideoPortfolio'>
          <p className='videoTitle'>{each?.name}</p>
          <p className='descVideoTitle'>{each?.descTitle}</p>
          <div className='stacksUsedVideoPorfolio'>
          {each?.stacks?.map((item, itemIndex)=>
            <p key={itemIndex} className='stackPortfolio'>{item}</p>
            )}
          </div>
          {each?.links ? <a href={each?.links} target="_blank" className='linkToVideoPortfolio'>Live</a>: <a href={each?.playstore} target="_blank" className='linkToVideoPortfolio'>Playstore</a> }
          {each?.appstore && <a href={each?.appstore} target="_blank" className='linkToVideoPortfolio'>AppStore</a>}
          </div>
          </div>
          )}
          </section>
    </div>
  );
}

export default App;
