import background from '../../assets/img/not-found-bg.jpg'
import record from '../../assets/img/not-found-broken-record.png'

export const NotFoundPage = () => {
  return (
    <div
      className='flex flex-col justify-center items-center bg-center bg-cover bg-no-repeat'
         // 100vh - 72px (header height)
      style={{ height: 'calc(100vh - 72px)', backgroundImage: `url(${background})` }}
    >
      <div className='flex justify-center items-center'>
        <span className='text-[100px] leading-[100px] md:text-[200px] md:leading-[200px] text-amber-500'>
          4
        </span>
        <div
          className='h-[100px] w-[100px] md:h-[200px] md:w-[200px]'
          style={{ backgroundImage: `url(${record})`, backgroundSize: 'cover' }}
        />
        <span className='text-[100px] leading-[100px] md:text-[200px] md:leading-[200px] text-amber-500'>
          4
        </span>
      </div>
      <h2 className='text-2xl md:text-5xl text-gray-700 my-8 md:my-12'>
        Sorry, page not found!
      </h2>
      <a
        className='bg-gray-700 mb-10 text-white py-2 px-10 text-lg rounded transition hover:text-amber-500'
        href='/'
      >
        Go Home
      </a>
    </div>
  )
}
