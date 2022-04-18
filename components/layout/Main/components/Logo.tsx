import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

const Logo: React.FC = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  return (
    <Link href="/" passHref>
      <a>
        <Image
          src={`/assets/images/logo-${mode}.png`}
          alt="Sang'cv logo"
          width={100}
          height={50}
        />
      </a>
    </Link>
  );
};

export default Logo;
