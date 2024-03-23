import 'simplebar-react/dist/simplebar.min.css';
import UserHome from './userHome';
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth';

export default async function Home() {
    // const session = await getServerSession();
    // const token = session?.token;
    // if(!session){
    //     redirect('/Auth/Signin')
    // }
    // console.log("token:   ",session)

    return <UserHome />;
};