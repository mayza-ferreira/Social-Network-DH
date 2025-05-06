import FAQSection from "@/components/faq/FAQSection";
import faqsApi from "@/services/faqs/faqs.service";

export default async function FAQPage({
  params,
}: {
  params: { slug: string };
}) {
  const faqPages = await faqsApi.getFAQPages();

  const faqPage = faqPages.data.find((page) => page.slug === `/${params.slug}`);
  return (
    <>
      <main>
        <FAQSection sections={faqPages.data} />
        <section className="flex flex-col">
          <h2>{faqPage?.tittle}</h2>
          <div>
            {faqPage?.body.map((element, index) => {
              if (element.type === "paragraph") {
                return (
                  <p key={index}>
                    {element.children.map((child, childIndex) => (
                      <span
                        key={childIndex}
                        style={{
                          fontWeight: child.bold ? "bold" : "normal",
                          fontStyle: child.italic ? "italic" : "normal",
                          textDecoration: child.strikethrough
                            ? "line-through"
                            : child.underline
                            ? "underline"
                            : "none",
                        }}
                      >
                        {child.text}
                      </span>
                    ))}
                  </p>
                );
              }

              if (element.type === "list") {
                return (
                  <ul
                    key={index}
                    style={{
                      listStyleType:
                        element.format === "unordered" ? "disc" : "decimal",
                    }}
                  >
                    {element.children.map((listItem, itemIndex) => (
                      <li key={itemIndex}>
                        {listItem.children.map((child, childIndex) => (
                          <span
                            key={childIndex}
                            style={{
                              fontWeight: child.bold ? "bold" : "normal",
                              fontStyle: child.italic ? "italic" : "normal",
                              textDecoration: child.strikethrough
                                ? "line-through"
                                : child.underline
                                ? "underline"
                                : "none",
                            }}
                          >
                            {child.text}
                          </span>
                        ))}
                      </li>
                    ))}
                  </ul>
                );
              }

              return null;
            })}
          </div>
        </section>
      </main>
    </>
  );
}
