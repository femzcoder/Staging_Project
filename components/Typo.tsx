import Link from "next/link";

export const TitleText = ({text, style}: {text: string, style?: string}) => {
  return (
    <h1 className={`font-bold text-gray-800 dark:text-white ${style}`}>
      {text}
    </h1>
  );
};

export const LinkText = ({text, linkUrl, style}: {text: string, linkUrl: string, style?: string}) => {
  return (
    <Link href={linkUrl} className={`text-[#007AFF] ${style}`}>{text}</Link>
  );
};