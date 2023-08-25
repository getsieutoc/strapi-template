import { getPageBySlug } from "@/utils/strapi";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const page = await getPageBySlug('home');

  return {
    page,
  };
}

export default function HomePage({ page }:InferGetServerSidePropsType<typeof getServerSideProps>) {

  return (
  (
    <div>
        <Header data={page.header} theme={page.theme} />
      <h1>{page.header.title}</h1>
    </div>
  );
  )
}
