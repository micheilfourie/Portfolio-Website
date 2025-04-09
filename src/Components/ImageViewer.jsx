const ImageViewer = ({ imageViewerOpen, handleViewerToggle, imageToView }) => {
  return (
    <div
      className={`fixed top-1/2 left-1/2 z-50 h-[200%] w-[200%] translate-x-[-50%] translate-y-[-50%] ${!imageViewerOpen && "pointer-events-none cursor-default opacity-0"} transitions-all duration-300 ease-in-out`}
    >
      <div
        onClick={handleViewerToggle}
        className="bg-navy-900/90 flex h-full w-full cursor-pointer items-center justify-center overflow-hidden"
      >
        <div className="mx-auto w-screen max-w-screen-xl min-md:px-10">
          <img src={imageToView} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;
