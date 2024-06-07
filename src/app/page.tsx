import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "home",
  description: "The app's Home page.",
};

export default function Home() {
  return (
    <main>
      <div>Hello world!</div>
    </main>
  );
}
