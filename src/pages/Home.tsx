import Background from '../assets/images/cars4.jpg'

function Home() {
  return (
    <div 
    style={{backgroundImage: `url(${ Background })`}} 
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
    >
      <div className="flex place-items-center h-screen">
        <h3 className='font-serif p-5 lg:text-7xl relative bottom-72 right-14 text-white '>Welcome to the Car Inventory</h3>
      </div>
      Home
    </div>
  )
}

export default Home