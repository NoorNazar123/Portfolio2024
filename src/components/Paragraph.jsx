const Paragraph = ({ className, labelText }) => {
  return (
    <p className={`${className}  leading-[27px] font-[400] md:leading-[27px]`}>
      {labelText}
    </p>
  );
};

export default Paragraph;
