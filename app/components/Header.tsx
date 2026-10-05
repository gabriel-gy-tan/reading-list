import Link from "next/link";

export default function Header() {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/books">Books</Link>
                </li>
            </ul>
        </div>
    )
}