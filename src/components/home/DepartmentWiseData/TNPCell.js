import YouTubeEmbed from '../../../utils/YoutubeEmbed';
import Location from '../../Location';
import PlacementGallery from '../Carousel';
import Contact from '../Contact';
import Hero from '../Hero';

const TNPCell = () => {
  return (
    <>
      <section>
        <Hero />
      </section>

      <section>
        <PlacementGallery />
      </section>

      {/* Placement Video Section with Enhanced Heading */}
      <section className="container mx-auto py-12">
        <div className="mb-8 relative">
          {/* Decorative background elements */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>

          {/* Main heading with gradient */}
          <h2 className="text-3xl sm:text-4xl font-bold text-center relative z-10 py-2">
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 
            animate-pulse-subtle"
            >
              From Campus to Corporate
            </span>
            <span className="block text-xl sm:text-2xl mt-2 text-gray-700 dark:text-gray-300 font-medium">
              IET Agra's Placement Success Stories
            </span>
          </h2>

          {/* Bottom decorative element */}
          <div className="w-24 h-1 mx-auto mt-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"></div>
        </div>

        <YouTubeEmbed
          videoId="sCh37CPf27Y"
          title="Inside the Recent Placement Drive at IET Agra - TnP Cell Success Stories"
        />
      </section>

      <section>
        <Contact />
      </section>
      <section>
        <Location />
      </section>
    </>
  );
};

export default TNPCell;
