import React from "react";
import { Header } from "./Header";

export interface PageProps {
  title: string;
  body: string;
}

export const Page = ({ title, body }: PageProps) => {
  return (
    <article>
      <Header logo="logo" title="BLOG" />

      <section className="m-auto max-w-2xl p-2 pt-12">
        <h2 className="text-5xl font-bold">{title}</h2>
        <p>{body}</p>
      </section>
    </article>
  );
};
