import Background from '../assets/images/cars2.jpg'

function About() {
  return (
    <div 
    className="bg-black flex">
      <div className='w-2/5 p-8 m-8'>
      <h2 className="text-white p-3 text-6xl font-semibold">About</h2>
      <p className="text-white w-3/5 p-3">We understand that buying a car is a big decision, which is why we strive to make the process as easy and stress-free as possible. Our website is designed to help you find the car you want quickly and easily, with detailed information on each vehicle, including features, specifications, and pricing. You can even compare different models side by side to help you make the best decision.</p>
      </div>
      <div
          style={{backgroundImage: `url(${ Background })`}} 
          className='bg-cover w-1/2 h-screen'
      >
      </div>
    </div>
  )
}

export default About