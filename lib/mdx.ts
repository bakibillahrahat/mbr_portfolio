import { compileMDX } from "next-mdx-remote/rsc";
import {
  ReactNode,
  CSSProperties,
  DetailedHTMLProps,
  HTMLAttributes,
} from "react";

// MDX Component types
interface MDXComponents {
  h1?: React.ComponentType<any>;
  h2?: React.ComponentType<any>;
  h3?: React.ComponentType<any>;
  p?: React.ComponentType<any>;
  a?: React.ComponentType<any>;
  ul?: React.ComponentType<any>;
  ol?: React.ComponentType<any>;
  li?: React.ComponentType<any>;
  blockquote?: React.ComponentType<any>;
  code?: React.ComponentType<any>;
  pre?: React.ComponentType<any>;
  img?: React.ComponentType<any>;
  [key: string]: React.ComponentType<any> | undefined;
}

// Custom MDX components
const components: MDXComponents = {
  h1: (props: any) => (
    <h1 className="text-4xl font-bold mt-8 mb-4 text-white">{props.children}</h1>
  ),
  h2: (props: any) => (
    <h2 className="text-2xl font-bold mt-6 mb-3 text-white/90">
      {props.children}
    </h2>
  ),
  h3: (props: any) => (
    <h3 className="text-xl font-semibold mt-4 mb-2 text-white/80">
      {props.children}
    </h3>
  ),
  p: (props: any) => (
    <p className="text-white/70 leading-relaxed mb-4">{props.children}</p>
  ),
  a: (props: any) => (
    <a
      {...props}
      className="text-violet-400 hover:text-violet-300 underline transition-colors"
    >
      {props.children}
    </a>
  ),
  ul: (props: any) => (
    <ul className="list-disc list-inside text-white/70 leading-relaxed mb-4 ml-4">
      {props.children}
    </ul>
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-inside text-white/70 leading-relaxed mb-4 ml-4">
      {props.children}
    </ol>
  ),
  li: (props: any) => (
    <li className="mb-2 ml-4">{props.children}</li>
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-violet-500 pl-4 py-2 my-4 text-white/60 italic">
      {props.children}
    </blockquote>
  ),
  code: (props: any) => (
    <code className="bg-white/10 px-2 py-1 rounded text-cyan-300 font-mono text-sm">
      {props.children}
    </code>
  ),
  pre: (props: any) => (
    <pre className="bg-[#0d0d0d] border border-white/10 rounded-lg p-4 overflow-x-auto mb-4 text-sm">
      {props.children}
    </pre>
  ),
  img: (props: any) => (
    <img
      {...props}
      className="w-full rounded-lg my-4 border border-white/10"
      alt={props.alt || ""}
    />
  ),
};

export async function compileMDXContent(content: string) {
  try {
    const { content: mdxContent, frontmatter } = await compileMDX<{
      title: string;
      description?: string;
      date?: string;
    }>({
      source: content,
      components,
    });

    return {
      content: mdxContent,
      frontmatter,
    };
  } catch (error) {
    console.error("Error compiling MDX:", error);
    throw error;
  }
}

export { components };
