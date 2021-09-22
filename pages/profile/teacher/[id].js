import ProfileCard from '../../../components/ProfileCard';
import { faUser , faCogs , faEdit , faPowerOff} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import RellEdjucationFull from '../../../components/RellEdjucationFull';
import { useEffect , useState } from 'react';
import BASE_URL from '../../../components/BASE_URL';
import Experience from '../../../components/Experience';
import FavTeacher from '../../../components/FavTeacher';
import Tutorials from '../../../components/Tutorials';
import ActivityHoures from '../../../components/ActivityHoures';
import { useRouter } from 'next/router';


function ProfileTeacher({listData}) {
  const[detailUser , setDetailUser]=useState();
  const [tutorials , setTutorials]=useState([]);
  const [experience , setExperience] = useState([]);
  const [favorites , setFavorites] = useState([]);
  const [schools , setSchools] = useState([]);
  const router = useRouter()
  const { id } = router.query;


  useEffect(async()=>{
    if(listData.result == 'ok'){
      setDetailUser(listData.data)
      setTutorials(listData.data.tutorials)
      setExperience(listData.data.experience)
      setFavorites(listData.data.favorites)
      setSchools(listData.data.schools)
    }
  },[])

  return (
    <>
    <div className="profile">
      <div className="profile-inner">
        <div className="profile-inner-right">
          <div className="profile-inner-right-inner">
            <ProfileCard data={detailUser}/>
          </div>
        </div>
        <div className="profile-inner-left">
          <Tutorials data={tutorials} techID={id}/>
          <FavTeacher data={favorites}/>
          <Experience data={experience} techID={id}/>
          <ActivityHoures data={schools} techID={id} />
        </div>
      </div>
    </div>
    
    <div className="owl-pro">
      <div className="owl-pro-inner">
        <RellEdjucationFull/>
      </div>
    </div>
    </>
  )
}



export async function getServerSideProps(context) {
  const id = await context.params.id ;
  let postData = {
    "teacher_id" : id ,
  }
  const returndata = await  fetch(`${BASE_URL}/profile/teacher` , {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData) 
    })
    const listData = await returndata.json()
    return { props: {listData}}
}


export default ProfileTeacher ;

