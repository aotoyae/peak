const TabHeader = ({
  firstTitle,
  secondTitle,
}: {
  firstTitle: string;
  secondTitle: string;
}) => {
  return (
    <>
      <h3 className="border-y border-r border-solid border-neutral-400 py-4 text-center text-lg font-bold">
        {firstTitle}
      </h3>
      <h3 className="border-y border-solid border-neutral-400 py-4 text-center text-lg font-bold">
        {secondTitle}
      </h3>
    </>
  );
};

export default TabHeader;
