import ProfileCard from '../../components/ProfileCard';
import ProfileOtherEdju from '../../components/ProfileOtherEdju';
import ProfileHead from '../../components/ProfileHead';
import ProfileVideo from '../../components/ProfileVideo';
import ProfileComment from '../../components/ProfileComment';
import RellEdjucation from '../../components/RellEdjucation';
import BASE_URL from '../../components/BASE_URL';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


function Profile({post}) {
  const[otherEdjucation , setOtherEdjucation] =useState([]);
  const[rellEdjucation , setRellEdjucation] =useState([]);
  const[comment , setComment]=useState([]);
  const[detailUser , setDetailUser]=useState();
  const[allData , setAllData]=useState();
  const router = useRouter()
  const { id } = router.query;



  useEffect(async()=>{
    if(post.result == 'ok'){
      setAllData(post.data);
      setOtherEdjucation(post.data.user.posts);
      setRellEdjucation(post.data.similar);
      setComment(post.data.comments);
      setDetailUser(post.data.user);
    }
  },[post])

  return (
    <div className="profile">
      <div className="profile-inner">
        <div className="profile-inner-right">
          <div className="profile-inner-right-inner">
            <ProfileCard data={detailUser}/>
            <ProfileOtherEdju data={otherEdjucation}/>
          </div>
        </div>
        <div className="profile-inner-left">
          <ProfileHead data={allData}/>
          {/* {allData['type'] && allData['type'] == 'movie' &&  */}
          <ProfileVideo data={allData}/>
          <ProfileComment data={comment} postId={id} user={detailUser}/>
          <RellEdjucation data={rellEdjucation}/>
        </div>
      </div>
    </div>
  )
}



export async function getServerSideProps(context) {
  const id = await context.params.id ;
  const returndata = await  fetch(`${BASE_URL}/web/post` , {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "post_id" : id ,
      }) 
    })
    const post = await returndata.json()
    return { props: {post}}
}

export default Profile ;
