import HomeContent from '@/component/home-content';
import './home.css';
import { ContactData } from './data';
import ContactForm from '@/component/common/form/contact';

const HomePage = () => {
  const Experiences = () => {
    return (
      <HomeContent id="experiences">
        <h2 className="title">
          Hi
          <span className="sub-title"> There</span>
        </h2>
        <p className="exps-description">
          There are many variations of passages ofLorem Ipsum available, but the I’ve written a few
          thousand words on why traditional “semantic class names” are the reason CSS is hard to
          maintain, but the truth is you’re never going to believe me until you actually try it. If
          you can suppress the urge to retch long enough to give it a chance, I really think you’ll
          wonder how you ever worked with CSS any other way.
        </p>
        {/* 
        <div className="cards">
          {MyExperiences.map((item, index) => {
            return <CardContent key={index} item={item} />;
          })}
        </div> */}
      </HomeContent>
    );
  };

  const Information = () => {
    return (
      <HomeContent id="info">
        <div className="information">
          <div className="info-left">
            {/* <div className="welcome">Hi! Welcome!</div> */}
            {/* <div className="info-avatar group">
              <span className="top"></span>
              <span className="bottom"></span>
              <img src={Images} alt="bg-info" />
            </div> */}
          </div>

          <div className="info-right">
            <div>Info</div>
          </div>
        </div>
      </HomeContent>
    );
  };

  const ContactMe = () => {
    return (
      <HomeContent id="contact">
        <h2 className="title text-center">
          Contact
          <span className="sub-title"> Me</span>
        </h2>
        <p className="first-letter">{ContactData['first_letter']}</p>
        <ContactForm />
      </HomeContent>
    );
  };

  return (
    <div className="container fex flex-col">
      <Information />
      <Experiences />
      <ContactMe />
    </div>
  );
};

export default HomePage;
