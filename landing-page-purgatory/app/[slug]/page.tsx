import { notFound } from "next/navigation";
import { pageComponents, generatedPages } from "../../generated/index";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return generatedPages.map((p) => ({ slug: p.slug }));
}

export default async function SlugPage({ params }: Props) {
  const { slug } = await params;

  const loader = pageComponents[slug];
  if (!loader) {
    notFound();
  }

  const { default: PageComponent } = await loader();
  return <PageComponent />;
}
