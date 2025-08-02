import type { ArticleWithSlug } from "@/lib/articles";
import { formatDate } from "@/lib/formatDate";
import { Card } from "./Card";

export function LatestArticles({ articles }: { articles: ArticleWithSlug[] }) {
  return (
    <>
      <h1 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
        Latest articles
      </h1>
      <div className="grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-3xl mt-10">
        <div className="flex flex-col gap-16">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </>
  );
}

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
}
