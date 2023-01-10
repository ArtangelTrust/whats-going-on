import Head from 'next/head'
import Image from 'next/image'
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient, linkResolver } from "prismicio";
import { components } from "slices";

import { BaseLayout, Header } from 'components';

export default function Section({content}) {
  return (
    <>
      <Header
        title={content.data.title}
        breadcrumb={
          [
            {title: "Home", href:"/"},
            {title: content.data.title}
          ]
        }
      />
      <main className="space-y-12">
        {content?.data?.slices && (
          <SliceZone slices={content?.data?.slices} components={components} />
        )}
      </main>
    </>
  )
}

Section.getLayout = function getLayout(page) {
  return <BaseLayout>{page}</BaseLayout>;
};

export async function getStaticPaths() {
  const client = createClient();
  const documents = await client.getAllByType("section");
  return {
    paths: documents.map((doc) => prismicH.asLink(doc, linkResolver)),
    fallback: true,
  };
}

const sectionGraphQuery = `{
  section {
    ...sectionFields
    slices {
      ...on text_block {
        variation {
          ...on default {
            primary {
              ...primaryFields
            }
          }
        }
      }
      ...on gallery {
        variation {
          ...on default {
            primary {
              ...primaryFields
            }
            items {
              ...itemsFields
              internal_link {
                ...on page {
                  ...pageFields
                }
                ...on section {
                  ...sectionFields
                }
              }
            }
          }
        }
      }
    }
  }
}`;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  const content = await client.getByUID("section", params.section, {
    graphQuery: sectionGraphQuery
  });
  return {
    props: { content },
  };
}
