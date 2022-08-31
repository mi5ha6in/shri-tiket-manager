const IndicatorComment = ({ className }) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.17 2.5H15A2.5 2.5 0 0 1 17.5 5v7.5A2.5 2.5 0 0 1 15 15h-3.82l-3.1 3.09a.83.83 0 0 1-1.41-.59V15h-2.5a2.5 2.5 0 0 1-2.5-2.5V5a2.5 2.5 0 0 1 2.5-2.5ZM15 3.33H4.17A1.67 1.67 0 0 0 2.5 5v7.5a1.67 1.67 0 0 0 1.67 1.67H7.5v3.33l3.33-3.33H15a1.67 1.67 0 0 0 1.67-1.67V5A1.67 1.67 0 0 0 15 3.33ZM9.17 5H10v4.17h-.83V5Zm0 5.83H10v1.67h-.83v-1.67Z"
        fill="#929292"
      />
    </svg>
  );
};

const IndicatorDescription = ({ className }) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.17 2.5H15A2.5 2.5 0 0 1 17.5 5v7.5A2.5 2.5 0 0 1 15 15h-3.82l-3.1 3.09a.83.83 0 0 1-1.41-.59V15h-2.5a2.5 2.5 0 0 1-2.5-2.5V5a2.5 2.5 0 0 1 2.5-2.5ZM15 3.33H4.17A1.67 1.67 0 0 0 2.5 5v7.5a1.67 1.67 0 0 0 1.67 1.67H7.5v3.33l3.33-3.33H15a1.67 1.67 0 0 0 1.67-1.67V5A1.67 1.67 0 0 0 15 3.33ZM4.17 5.83H15v.84H4.17v-.84Zm0 2.5h10v.84h-10v-.84Zm0 2.5h6.66v.84H4.17v-.84Z"
        fill="#929292"
      />
    </svg>
  );
};

export const Indicators = ({ isComments, isDescription, className }) => {
  return (
    <>
      {isComments && (
        <IndicatorComment className={className} />
      )}
      {isDescription && (
        <IndicatorDescription className={className} />
      )}
    </>
  );
};
