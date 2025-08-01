import VisitCard from "../components/VisitCard";
import ExploreCard from "../components/ExploreCard";

const Home = () => {
  return (
    <>
      <div>
        <div className="bg-[#172B32] text-white pt-16 py-4 px-6">
          <h1 className="text-6xl font-bold text-center mb-10 w-3/5 m-auto">
            Trucking <span className="text-[#43D1C4]">Automation</span> that
            works for you
          </h1>

          <div className="w-3/5 mx-auto">
            <div className="bg-[#2D4152] text-gray-300 text-sm font-medium rounded-2xl shadow-lg p-4 grid grid-cols-3 gap-4">
              <VisitCard
                to="/retail"
                src="https://spotter.ai/static/media/lens-map.37225a21b1e107b5f8b1.png"
                paragraph="Real-time logistics insight."
              />
              <VisitCard
                to="/tms"
                src="https://spotter.ai/static/media/lens-map.37225a21b1e107b5f8b1.png"
                paragraph="Engagement visibility."
              />
              <VisitCard
                to="/retail"
                src="https://spotter.ai/static/media/lens-map.37225a21b1e107b5f8b1.png"
                paragraph="Browser extension."
              />
              <VisitCard
                to="/retail"
                src="https://spotter.ai/static/media/lens-map.37225a21b1e107b5f8b1.png"
                paragraph="Spotter TMS."
              />
              <VisitCard
                to="/retail"
                src="https://spotter.ai/static/media/lens-map.37225a21b1e107b5f8b1.png"
                paragraph="Driver app."
              />
              <VisitCard
                to="/retail"
                src="https://spotter.ai/static/media/lens-map.37225a21b1e107b5f8b1.png"
                paragraph="Real-time logistics insight."
              />
            </div>
          </div>
        </div>

        <div className="py-16 w-[80%] m-auto text-gray-800">
          <h2 className="text-5xl font-semibold mb-10 text-center">
            Explore Spotter's{" "}
            <span className="text-[#43D1C4]">Capabilities</span>
          </h2>
          <p className="mb-24 text-center text-gray-600 text-xl w-3/5 m-auto">
            Everything you need to optimize your logistics operations, powered
            by cutting-edge AI
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <ExploreCard
              title="Spotter Lens"
              subTitle="Market intelligence at your fingertips"
              paragraph="Real-time freight market data analytics with comprehensive rankings and pricing insights."
            />

            <ExploreCard
              title="Spotter CRM"
              subTitle="Recruiting engine with visibility"
              paragraph="Streamline your recruiting process with engagement tracking and performance visibility."
            />
            <ExploreCard
              title="Driver App"
              subTitle="Load optimization made simple"
              paragraph="AI-powered load scoring and matching system with real-time performance metrics."
            />
            <ExploreCard
              title="Spotter TMS"
              subTitle="Visibility engine for operations"
              paragraph="Complete transportation management system with data automation and operational visibility."
            />
            <ExploreCard
              title="Spotter Sentinel"
              subTitle="Safety automation and scoring"
              paragraph="Advanced driver scoring system with safety automation and compliance monitoring."
            />
            <ExploreCard
              title="Load Board Extension"
              subTitle="Browser automation tools"
              paragraph="Chrome and Firefox extension that automates load board workflows with advanced filtering."
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
