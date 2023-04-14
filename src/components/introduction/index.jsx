
export const Introduction = () => {
  return (
     <div className="relative">
        <img src="src/components/introduction/assets/images/background.png" />
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center">
           <div className="text-white">
              <h1 className="text-5xl font-bold mb-2">Listen to Great Music!</h1>
              <p className="max-w-none mt-4">
                 SoundCloud is a global music sharing platform that connects artists and music 
                 lovers, offering an immersive and intuitive audio experience with a vast library of
                 original compositions across all genres connecting with like-minded individuals,
                 and promoting your own creative works.
              </p>
           </div>
        </div>
        <img
           className="absolute bottom-0 left-1/2 z-10 transform -translate-x-1/2"
           src="src/components/introduction/assets/images/objects.png"
        />
     </div>
  )
}
