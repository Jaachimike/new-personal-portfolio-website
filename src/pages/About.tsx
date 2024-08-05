import profilePicture from "../assets/jpg/profile-pic.jpg";
import SocialMediaLink from "../components/SocialMediaLink";
import instagram from "../assets/svg/instagram.svg";
import github from "../assets/svg/github.svg";
import linkedin from "../assets/svg/linkedin.svg";
import twitter from "../assets/svg/twitter.svg";
import email from "../assets/svg/email.svg";

const About = () => {
  const socialMediaLinks = [
    {
      logo: twitter,
      text: "Follow on Twitter",
      link: "https://x.com/OJaachi",
    },
    {
      logo: instagram,
      text: "Follow on Instagram",
      link: "https://www.instagram.com/_jaachi_/",
    },
    {
      logo: github,
      text: "Follow on Github",
      link: "https://github.com/Jaachimike",
    },
    {
      logo: linkedin,
      text: "Follow on Linkedin",
      link: "https://www.linkedin.com/in/okafor-jaachimike/",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-2 gap-16 py-24">
        {/* writeup */}
        <div className="row-span-2 flex flex-col gap-8">
          <h1 className="text-white text-5xl font-bold">
            Hi ✋🏽, I&apos;m Okafor Jaachimike.
          </h1>
          <p>
            I am an accomplished Software Architect with over 8 years of
            expertise in building technology solutions and a track record of
            excellence.
          </p>
          <p>
            I have loved being in the tech space since my early years, gaining
            exposure to gadgets as a young kid. Since then, I have developed a
            strong passion for the craft, always eagerly seeking out new
            challenges and solutions. I dedicated several years to learning and
            practicing the art of programming, hardware and software, both at a
            personal and production level.
          </p>
          <p>
            I have gained valuable experience working with both local and
            international teams, both as a contributor and a leader. This
            experience has enriched my life significantly, as I've had the
            opportunity to culturally integrate with people from different parts
            of the world. I have also had the privilege of speaking at various
            tech conferences and teaching different groups how to become tech
            experts and make a living from their expertise.
          </p>
          <p>
            My journey as a builder has been a continuous one, and I still have
            ambitious goals to tackle more complex challenges, mastering the art
            of simplifying the most intricate problems. As I involve myself in
            current technologies and always at its fronteir, I believe in a
            future where we will create 'Out of Earth' solutions. But until
            then, my passion for improving computer propagation and enhancing
            computational logic remains the driving force behind my code. It's
            all about writing code for a better, more advanced way of living.
          </p>
        </div>
        {/* image */}
        <div>
          <img src={profilePicture} alt="" className="rounded-2xl" />
        </div>
        {/* social links */}
        <div className="space-y-5">
          {/* social media */}
          <div className="space-y-5 border-b pb-10 border-gray-700">
            {socialMediaLinks.map((soicalMedia, index) => {
              return (
                <SocialMediaLink
                  key={index}
                  logo={soicalMedia.logo}
                  link={soicalMedia.link}
                  text={soicalMedia.text}
                />
              );
            })}
          </div>
          {/* email */}
          <SocialMediaLink
            logo={email}
            text="okaforjaachi@gmail.com"
            link="mailto:okaforjaachi@gmail.com"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
