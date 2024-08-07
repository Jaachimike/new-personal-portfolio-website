interface SocialMediaLinkProps {
  logo: string;
  text: string;
  link: string;
  download?: boolean;
}

const SocialMediaLink = ({
  logo,
  text,
  link,
  download,
}: SocialMediaLinkProps) => {
  return (
    <div>
      <a
        href={link}
        className="flex gap-5 group"
        target={download ? undefined : "_blank"}
        rel={download ? undefined : "noopener noreferrer"}
        download={download ? true : undefined}
      >
        <img src={logo} alt="social media logo" className="h-5 w-auto" />
        <p className="text-white group-hover:underline">{text}</p>
      </a>
    </div>
  );
};

export default SocialMediaLink;
