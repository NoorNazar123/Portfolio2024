const Heading = ({ className, labelText }) => {
  return (
    <h2
      className={`${className} leading-[27px] font-[600] md:font-[900] md:leading-[45px] s`}
    >
      {labelText}
    </h2>
  );
};
export default Heading;
