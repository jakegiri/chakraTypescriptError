import { BLOCKS } from "@contentful/rich-text-types";

// Create a bespoke renderOptions object to target BLOCKS.EMBEDDED_ENTRY (linked block entries e.g. code blocks)
// INLINES.EMBEDDED_ENTRY (linked inline entries e.g. a reference to another blog post)
// and BLOCKS.EMBEDDED_ASSET (linked assets e.g. images)

export default function renderOptionsForLinkedAssets(links: any) {
  // create an asset map
  const assetMap = new Map();
  // loop through the assets and add them to the map
  for (const asset of links.assets.block) {
    assetMap.set(asset.sys.id, asset);
  }

  return {
    // other options...

    renderNode: {
      // other options...
      [BLOCKS.EMBEDDED_ENTRY]: (node: any, children: any) => {
        // find the entry in the entryMap by ID
        const entry = assetMap.get(node.data.target.sys.id);

        // render the entries as needed by looking at the __typename
        // referenced in the GraphQL query
        if (entry.__typename === "CodeBlock") {
          return (
            <pre>
              <code>{entry.code}</code>
            </pre>
          );
        }

        if (entry.__typename === "VideoEmbed") {
          return (
            <iframe
              src={entry.embedUrl}
              height="100%"
              width="100%"
              frameBorder="0"
              scrolling="no"
              title={entry.title}
              allowFullScreen={true}
            />
          );
        }
      },
      [BLOCKS.EMBEDDED_ASSET]: (node: any, next: any) => {
        // find the asset in the assetMap by ID
        const asset = assetMap.get(node.data.target.sys.id);

        // render the asset accordingly
        return <img src={asset.url} alt="My image alt text" />;
      },
    },
  };
}
