interface SocialMediaLinkProps {
  logo: string;
  text: string;
  link: string;
}

const SocialMediaLink = ({logo, text, link}: SocialMediaLinkProps) => {
  return (
    <div>
      <a target="_blank" href={link} className="flex gap-5 group">
        <img src={logo} alt="social media logo" className="h-7 w-auto" />
        <p className="text-white group-hover:underline">{text}</p>
      </a>
    </div>
  );
};

export default SocialMediaLink;
