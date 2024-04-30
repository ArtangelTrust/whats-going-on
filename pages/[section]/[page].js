import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import * as prismic from "@prismicio/client";

import { createClient, linkResolver } from "prismicio";
import { components } from "slices";

import { BaseLayout, Header } from "components";

export default function Page({ content }) {
  return (
    <>
      <Header
        title={content?.data?.title}
        breadcrumb={[
          { title: "Home", href: "/" },
          {
            title: content?.data?.section.data.title,
            href: linkResolver(content?.data.section),
          },
          { title: content?.data?.title },
        ]}
      />
      <main id="main-content" className="space-y-6">
        {content?.data?.slices && (
          <SliceZone slices={content?.data?.slices} components={components} />
        )}
      </main>
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <BaseLayout>{page}</BaseLayout>;
};

export async function getStaticPaths() {
  const client = createClient();
  const documents = await client.getAllByType("page", {
    predicates: [prismic.predicate.has("my.page.section")],
  });
  return {
    paths: documents.map((doc) => prismicH.asLink(doc, linkResolver)),
    fallback: false,
  };
}

const pageGraphQuery = `{
  page {
    ...pageFields
    section {
      ...on section {
        ...sectionFields
      }
    }
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
      ...on embed_block {
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
      ...on resource_block {
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
    }
  }
}`;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  const content = await client.getByUID("page", params.page, {
    graphQuery: pageGraphQuery,
  });
  return {
    props: { content },
  };
}
