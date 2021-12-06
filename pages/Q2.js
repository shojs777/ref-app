import Link from "next/link";
import Category2 from "../components/Category2";
export default function Q2({ title }) {
  const arry2 = ["運用法", "エラー", "導入"];
  return (
    <>
      <h1>{`${title}の何を知りたいですか？`}</h1>
      {arry2.map((content, index) => {
        return (
          <>
            <Link href="/Q3">
              <a>
                <Category2 key={index} content={content} />
              </a>
            </Link>
            <br />
          </>
        );
      })}

      <form />
    </>
  );
}
