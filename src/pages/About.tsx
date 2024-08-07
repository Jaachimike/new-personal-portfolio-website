import {motion} from "framer-motion";
import profilePicture from "../assets/jpg/profile-pic.jpg";
import SocialMediaLink from "../components/SocialMediaLink";
import instagram from "../assets/svg/instagram.svg";
import github from "../assets/svg/github.svg";
import linkedin from "../assets/svg/linkedin.svg";
import twitter from "../assets/svg/twitter.svg";
import email from "../assets/svg/email.svg";
import resume from "../assets/svg/curriculum-resume-svgrepo-com.svg";

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
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.5}}
      className="px-4 sm:px-6 lg:px-8"
    >
      <div className="grid lg:grid-cols-2 gap-8 py-8 sm:py-12 md:py-16 lg:py-24">
        {/* writeup */}
        <motion.div
          className="row-span-2 flex flex-col gap-8 order-2 lg:order-1 "
          initial={{x: -50, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.2}}
        >
          <motion.h1
            className="text-white text-5xl font-bold"
            initial={{y: -20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.5, delay: 0.4}}
          >
            Hi ✋🏽, I&apos;m Okafor Jaachimike.
          </motion.h1>
          <motion.p
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.6}}
          >
            I am a passionate Full Stack Developer with over 4 years of
            professional experience in crafting innovative web solutions. My
            journey in technology began long before my university studies,
            sparked by an early fascination with the digital world and its
            endless possibilities. This early interest led me to pursue a degree
            in Electrical and Electronics Engineering at Covenant University,
            where I further honed my problem-solving skills and expanded my
            technical expertise. Throughout my academic years and beyond, I've
            been dedicated to mastering both front-end and back-end
            technologies, building a comprehensive toolkit that includes HTML5,
            CSS3, JavaScript (ES6+), TypeScript, React.js, Node.js, Express.js,
            MongoDB, MySQL, PHP, and Laravel.
          </motion.p>
          <motion.p
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.7}}
          >
            In my professional career, I've had the opportunity to work on
            diverse projects, from dynamic web applications to robust back-end
            systems. I take pride in having successfully delivered over 25
            websites and web applications, each exceeding client expectations
            and boosting their online presence. My experience has taught me the
            value of clear communication and the importance of delivering
            projects on time and within budget. I'm also proficient in
            developing fully functional and responsive WordPress websites,
            always focusing on optimizing user experiences across all devices.
          </motion.p>
          <motion.p
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.8}}
          >
            I'm a firm believer in continuous learning and staying at the
            forefront of web development trends. This commitment drives me to
            constantly expand my skill set and tackle new challenges. Whether
            it's integrating cutting-edge technologies or optimizing
            performance, I'm always eager to push the boundaries of what's
            possible in web development. My passion for improvement extends
            beyond personal growth, as I actively collaborate with
            cross-functional teams to deliver high-quality solutions.
          </motion.p>
          <motion.p
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.9}}
          >
            When I'm not crafting code, you'll find me exploring the latest tech
            innovations, contributing to open-source projects, or participating
            in hackathons to sharpen my skills and connect with fellow
            developers. I'm excited about the future of web technology and am
            always looking for new opportunities to create impactful,
            user-centric digital experiences. Let's build something amazing
            together!
          </motion.p>
        </motion.div>
        {/* image */}
        <motion.div
          initial={{scale: 0.8, opacity: 0}}
          animate={{scale: 1, opacity: 1}}
          transition={{duration: 0.5, delay: 0.6}}
          className="order-1  lg:order-2"
        >
          <img src={profilePicture} alt="" className="rounded-2xl" />
        </motion.div>
        {/* social links */}
        <motion.div
          className="space-y-5 order-3"
          initial={{y: 50, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.8}}
        >
          {/* social media */}
          <div className="space-y-5 border-b pb-10 border-gray-700">
            {socialMediaLinks.map((socialMedia, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{x: -20, opacity: 0}}
                  animate={{x: 0, opacity: 1}}
                  transition={{duration: 0.3, delay: 1 + index * 0.1}}
                >
                  <SocialMediaLink
                    logo={socialMedia.logo}
                    link={socialMedia.link}
                    text={socialMedia.text}
                  />
                </motion.div>
              );
            })}
          </div>
          {/* email */}
          <motion.div
            initial={{x: -20, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 0.3, delay: 1.5}}
            className="space-y-5"
          >
            <SocialMediaLink
              logo={email}
              text="okaforjaachi@gmail.com"
              link="mailto:okaforjaachi@gmail.com"
            />
            <SocialMediaLink
              logo={resume}
              text="Download my resume"
              link="/my_resume.pdf"
              download={true}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
