import Link from "next/link";
import Category3 from "../components/Category3";
export default function Q3() {
  const arry3 = ["firebase", "git", "VScode"];
  return (
    <>
      <h1>Q3を知りたいですか？</h1>
      {arry3.map((content, index) => {
        return (
          <>
            <Link href="/Q4">
              <a>
                <Category3 key={index} content={content} />
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
