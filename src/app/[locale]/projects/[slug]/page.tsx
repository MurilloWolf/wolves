"use client";

type ProjectDetailsProps = {
  params: {
    locale: string;
    slug: string;
  };
};

export default function ProjectDetails(props: ProjectDetailsProps) {
  const {
    params: { slug },
  } = props;

  return <p>Project Slug:{slug}</p>;
}
