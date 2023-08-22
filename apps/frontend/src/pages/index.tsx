import { GeneralLayout } from '@/components';
import { useSWR } from '@/hooks';

export default function IndexPage() {
  const { data } = useSWR('/api/strapi');

  console.log('### data: ', { data });

  return (
    <GeneralLayout>
      <h1>Next.js Template</h1>
      <p>
        This is an example site to demonstrate how to use{' '}
        <a href="https://next-auth.js.org">NextAuth.js</a> for authentication.
      </p>
    </GeneralLayout>
  );
}
