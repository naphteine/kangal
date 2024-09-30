import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen">
      <div className="m-auto">
        <h1 className="font-bold text-6xl">Kangal</h1>
        <h2>Expended expense tracker</h2>
        <h3>Tracking inflation and shrinkflation like pro</h3>
        <h4>SOON</h4>
        <p>
          Under development. by{" "}
          <Link className="underline" href="https://gokay.works">
            Gökay
          </Link>{" "}
          |{" "}
          <Link
            className="underline"
            href="https://github.com/naphteine/kangal"
          >
            Source code
          </Link>
        </p>
      </div>
    </main>
  );
}
