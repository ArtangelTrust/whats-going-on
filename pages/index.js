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
      <main id="main-content" className="space-y-6">
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

const homeGraphQuery = `{
  home {
    ...homeFields
    slices {
      ...on text_block {
        variation {
          ...on default {
            primary {
              ...primaryFields
            }
            items {
              ...itemsFields
            }
          }
        }
      }
      ...on testimonial_block {
        variation {
          ...on default {
            primary {
              ...primaryFields
            }
            items {
              ...itemsFields
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
      ...on menu {
        variation {
          ...on default {
            primary {
              ...primaryFields
            }
            items {
              ...itemsFields
              link {
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

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const content = await client.getSingle("home", {
    graphQuery: homeGraphQuery
  });
  return {
    props: { content },
  };
}
