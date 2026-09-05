/**
 * Renders one or more schema.org objects as JSON-LD.
 * Server component: the markup is in the initial HTML, which is what
 * crawlers read.
 */
export default function JsonLd({ data }) {
  const blocks = Array.isArray(data) ? data : [data];

  return (
    <>
      {blocks.map((block, index) => (
        <script
          key={index}
          type="application/ld+json"
          // The content is authored in data/schema.js, never user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
