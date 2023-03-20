import DataTable from '../components/DataTable'
import cars3 from "../assets/images/cars3.jpg"


function Dashboard() {
  return (
    <div     
    style={
      {
      backgroundImage: `url(${ cars3 })`,
      backgroundSize: 'cover',
      height: '100vh'
    }
    } 
    className='hero mx-auto bg-cover'
    >
      <DataTable />
    </div>
  )
}

export default Dashboard