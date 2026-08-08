import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { login,logout } from './store/authSlice';
import autheuser from './appwrite/Auth';
import { Header , Footer} from './components/index';
import { Outlet } from 'react-router-dom';


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(()=>{
    autheuser.getCurrentAccount()
    .then((userData)=>{
      if(userData){
        dispatch(login(JSON.parse(JSON.stringify(userData))));
      }else{
        dispatch(logout());
      }   
    })
    .finally(()=>setLoading(false));
  },[])

 return loading?(
  <div className='h-screen w-full flex flex-wrap justify-center items-center py-15'>
    <div className='h-[50px] w-[50px] border-4 border-black/10 border-t-blue-500 rounded-full animate-spin'>   
    </div>
  </div>
 ):(<div className='h-screen w-full flex flex-wrap justify-center items-center py-15'>
   <Header />
   <Outlet />
   <Footer />
   </div>
 );
}

export default App
