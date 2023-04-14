
export const Introduction = () => {
  return (
     <section
        className="relative"
        style={{
           backgroundImage: `url('public/assets/img/introduction-background.png')`,
           width: '100vw',
           height: '450px'
        }}
     >
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 mx-auto text-center w-55% text-white">
           <h1 className="text-5xl font-bold mb-2">Listen to Great Music!</h1>
           <p className="max-w-none mt-4">
              Sound Scape is a global music sharing platform that connects artists and music lovers,
              offering an immersive and intuitive audio experience with a vast library of original
              compositions across all genres connecting with like-minded individuals, and promoting
              your own creative works.
           </p>
        </div>
        <img
           className="max-w-full absolute bottom-0 left-1/2 z-10 transform -translate-x-1/2"
           src="public/assets/img/introduction-icons.png"
        />
     </section>
  )
}
