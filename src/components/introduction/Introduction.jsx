export const Introduction = () => {
  return (
    <section className="mb-8 py-20 text-center relative">
      <div
        className="absolute inset-0 w-full h-full bg-contain animation-bg"
        style={{
          backgroundImage: "url('assets/img/introduction-background.png')",
        }}
      />
      <div className="container mx-auto">
        <div className="mx-auto text-white px-5">
          <h1 className="text-5xl font-bold mb-5">Listen to Great Music!</h1>
          <p className="w-full md:w-8/12 mx-auto">
            Sound Scape is a global music sharing platform that connects artists and music lovers, offering an immersive
            and intuitive audio experience with a vast library of original compositions across all genres connecting
            with like-minded individuals, and promoting your own creative works.
          </p>
        </div>
      </div>
      <img className="relative block mx-auto mt-5 -mb-20 max-w-full" src="assets/img/introduction-icons.png" />
    </section>
  )
}
