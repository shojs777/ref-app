import Link from "next/link";
import Category4 from "../components/Category4";
export default function Q4() {
  const arry4 = ["firebase", "git", "VScode"];
  return (
    <>
      <h1>Q4を知りたいですか？</h1>
      {arry4.map((content, index) => {
        return (
          <>
            <Link href="/Q5">
              <a>
                <Category4 key={index} content={content} />
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
