import DataTable from '../components/DataTable'
import index4 from "../assets/images/index4.png"


function Dashboard() {
  return (
    <div     
    style={{backgroundImage: `url(${ index4 })`}} 
    className='hero mx-auto bg-cover'
    >
      <DataTable />
    </div>
  )
}

export default Dashboard