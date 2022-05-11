import {SiGithub } from 'react-icons/si';
const Title = ({ textTitle, className }) => {
  return <h1 className={className}>{textTitle} <SiGithub /> </h1>;
};

export default Title;
