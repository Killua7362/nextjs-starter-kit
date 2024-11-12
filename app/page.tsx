import { auth } from '@/auth';
import { SignOut } from '@/components/auth/signout-button';
import { SignIn } from '@/components/auth/signin-button';

export default async function Home(): Promise<JSX.Element> {
  const session = await auth();
  return <main>{!session?.user ? <SignIn /> : <SignOut />}</main>;
}
