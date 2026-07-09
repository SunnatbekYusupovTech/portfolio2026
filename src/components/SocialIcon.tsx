import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaTelegram } from 'react-icons/fa';
import { FiGlobe } from 'react-icons/fi';
import type { IconType } from 'react-icons';

const MAP: Record<string, IconType> = {
  linkedin: FaLinkedin,
  github: FaGithub,
  instagram: FaInstagram,
  facebook: FaFacebook,
  telegram: FaTelegram,
};

export default function SocialIcon({ name, size = 18 }: { name: string; size?: number }) {
  const Icon = MAP[name] ?? FiGlobe;
  return <Icon size={size} aria-hidden />;
}
