import Link from "next/link";
import Category5 from "../components/Category5";
export default function Q5() {
  const arry5 = ["運用法", "エラー", "導入"];
  return (
    <>
      <h1>Q5を知りたいですか？</h1>
      {arry5.map((content, index) => {
        return (
          <>
            <Category5 key={index} content={content} />
            <br />
          </>
        );
      })}

      <form />
    </>
  );
}
