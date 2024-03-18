import { Clouds } from "./components/Cloud";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="m-auto z-10">
                <button className="self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    <Link className="text-white font-bold" href={"/projects"}>
                        Projects
                    </Link>
                </button>
            </div>
            <Clouds></Clouds>
        </main>
    );
}
