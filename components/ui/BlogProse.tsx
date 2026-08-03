import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type BlogProseProps = {
  content: string;
};

export function BlogProse({ content }: BlogProseProps) {
  return (
    <div className="blog-prose">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
