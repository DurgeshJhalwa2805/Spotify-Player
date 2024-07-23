const CardLoader = () => (
  <div className="animate-pulse backdrop-blur-2xl brightness-150 shadow rounded-md p-4  w-full mx-auto my-2 transition-all duration-100 ease-linear ">
    <div className=" flex space-x-4">
      <div className="rounded-full bg-gray-400 h-10 w-10"></div>
      <div className="flex-1 space-y-6 py-1">
        <div className="space-y-3 w-[25%] max-w-[120px]">
          <div className="h-2 bg-gray-400 rounded col-span-2"></div>
          <div className="h-2 bg-gray-400 rounded col-span-1"></div>
        </div>
      </div>
    </div>
  </div>
);

const ImageLoader = () => (
    <div className="animate-pulse backdrop-blur-2xl brightness-150 shadow rounded-md  h-full  w-full mx-auto  transition-all duration-100 ease-linear ">
        <div className="rounded-md bg-gray-100 h-full w-full">
        </div>
    </div>
  );

// eslint-disable-next-line react/prop-types
const SkeletonLoaders = ({ type }) => {
  const renderLoader = () => {
    switch (type) {
      case "card":
        return <CardLoader />;
    case "image":
            return <ImageLoader />;
      //  we can add here more loaders
      default:
        return <div>Loading...</div>;
    }
  };

  return <>{renderLoader()}</>;
};

export default SkeletonLoaders;
