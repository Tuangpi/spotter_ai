interface ExploreCardProp {
  title: string;
  subTitle: string;
  paragraph: string;
}
const ExploreCard = ({ title, subTitle, paragraph }: ExploreCardProp) => {
  return (
    <div className="bg-white p-6 font-semibold rounded-xl shadow hover:shadow-md transition border border-gray-200">
      <div className="bg-[#43D1C4] p-2.5 mb-6 rounded-xl flex justify-center items-center w-fit m-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
          <path d="M18 17V9"></path>
          <path d="M13 17V5"></path>
          <path d="M8 17v-3"></path>
        </svg>
      </div>
      <h3 className="text-2xl font-semibold mb-2 text-center">{title}</h3>
      <h4 className="text-[#43D1C4] text-center font-bold mb-2">{subTitle}</h4>
      <p className="text-sm text-gray-500 text-center">{paragraph}</p>
    </div>
  );
};
export default ExploreCard;
