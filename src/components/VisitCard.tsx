import { Link } from "react-router";

const VisitCard = ({
  to,
  src,
  paragraph,
}: {
  to: string;
  src: string;
  paragraph: string;
}) => {
  return (
    <Link
      to={`/${to}`}
      className="bg-[#192736] rounded-md p-4 border-t-2 border-t-[#50769e] flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300 ease-in-out"
    >
      <img src={src} />
      <div>
        <p className="text-gray-300 text-sm mb-2">{paragraph}</p>
      </div>
    </Link>
  );
};
export default VisitCard;
