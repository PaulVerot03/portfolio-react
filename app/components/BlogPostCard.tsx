import { pick, type BlogPost } from "../data/blog.types";
import type { Lang } from "../data/projects.types";

export function BlogPostCard({ post, lang }: { post: BlogPost; lang: Lang }) {
  const formattedDate = new Date(post.date + "T00:00:00").toLocaleDateString(
    lang === "fr" ? "fr-FR" : "en-US",
    { year: "numeric", month: "long", day: "numeric" },
  );

  return (
    <div className="mb-6 pl-3 sm:pl-4 border-l-4 border-purple-500">
      <p className="text-sm text-purple-400 font-medium mb-1">
        {formattedDate}
      </p>
      <h2 className="text-2xl sm:text-3xl font-bold text-purple-600 mb-4">
        {pick(post.title, lang)}
      </h2>

      {post.body.map((paragraph, index) => (
        <p key={index} className="mb-2 dark:text-white">
          {pick(paragraph, lang)}
        </p>
      ))}

      {post.images?.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className="mb-4 rounded-lg mx-auto w-full max-w-[700px] h-auto"
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
  );
}
