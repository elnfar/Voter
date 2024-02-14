import { SignInButton, SignOutButton, UserButton, auth } from "@clerk/nextjs";
 
export default function Home() {

  const {userId} = auth();



  return (
    <div className="h-screen">
      <h1>user id: {userId ? userId : 'Not registered yet'}</h1>
      {!userId ? <SignInButton/> : <SignOutButton/>}


      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}