import React from 'react';

type Props = {
  label: string
  bgColor: string
  textColor?: string
}

const Tag = ({ label, bgColor, textColor }: Props) => {
  return (
    <div
      className={`inline-block px-2 py-1 rounded-full text-sm font-semibold ${bgColor} ${textColor}`}
    >
      {label}
    </div>
  );
};
export default Tag;
