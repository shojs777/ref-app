import Link from "next/link";
import Category from "../components/Category";
import Form from "../components/Form";
export default function Home() {
  const arry = ["firebase", "git", "VScode"];
  return (
    <>
      <h1>何を知りたいですか？</h1>
      {arry.map((content, index) => {
        return (
          <>
            <Link href="/Q2">
              <a>
                <Category key={index} title={content} />
              </a>
            </Link>
            <br />
          </>
        );
      })}
      <Form />
    </>
  );
}
