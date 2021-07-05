import  Toolbar  from "../components/toolbar";
export  const Profile = ({profile})=>{
 
    return (
        <div className="flex  items-center flex-col">
          <Toolbar/>
           <div className="  flex-1 flex flex-col content-center my-4  justify-center align-center ">
            <h1 className="text-center my-4 font-bold text-3xl">Profile</h1>
            <div className= "m-auto text-center  ">
                <h3 className=" text-3xl  mt-4 ">{profile.name}</h3>
                <h6 className="text-xl ">{profile.position}</h6>
                
                <img src={profile.image} className="  my-4 w-52 border-2 rounded-full" alt="Profile Image" />
                
                <p>{profile.description}</p>
            </div>
            </div>
        </div>
    );
}


export const getServerSideProps = async pageContext => {
       
    const apiResponse = await fetch(
            'https://my-json-server.typicode.com/r3dcoder/myprofile/db'
        )

        const {profile} = await apiResponse.json();

        return {
            props:{
                profile 
            }
        }
};
export default Profile;