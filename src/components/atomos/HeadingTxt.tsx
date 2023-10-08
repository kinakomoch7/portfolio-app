type Props = {
  message: String;
};

export const HeadingTxt = (props: Props) => {
  const { message } = props;

  return (
    <div className="text-center">
      <p>{message}</p>
    </div>
  );
};
