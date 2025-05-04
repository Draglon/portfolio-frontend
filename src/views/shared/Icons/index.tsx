"use client";

type IconProps = {
  icon: string;
  parts?: number | null;
}

type IconsProps = {
  icons: IconProps[];
};

const Icons = ({ icons }: IconsProps) => {
  return (
    icons.map(({ icon, parts }, iconIndex: number) => (
      <i className={`icon icon-${icon}`} key={iconIndex}>
        {parts && [...Array(parts)].map((_, i) => <span key={i+1} className={`path${i+1}`} />)}
      </i>
    )));
};

export default Icons;
