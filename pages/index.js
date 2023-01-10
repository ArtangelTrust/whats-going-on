import Head from 'next/head'
import Image from 'next/image'
import { PrismicLink, PrismicRichText, SliceZone } from "@prismicio/react";

import { createClient } from "prismicio";
import { components } from "slices";

import { BaseLayout, Header } from 'components';

export default function Home({content}) {
  return (
    <>
      <Header />
      <main className="space-y-12">
        {content?.data?.slices && (
          <SliceZone slices={content?.data?.slices} components={components} />
        )}
      </main>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return <BaseLayout>{page}</BaseLayout>;
};

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const content = await client.getSingle("home");
  return {
    props: { content },
  };
}
