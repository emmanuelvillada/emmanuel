import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center">
                <Image
                    src="/emmanuel.png"
                    alt="Emmanuel Logo"
                    width={100}
                    height={100}
                />
                <h1 className="font-bold text-2xl">Emmanuel</h1>
            </div>
            <div>
                <Link href="/home">Home</Link>
            </div>
        </div>
    );
};

export default Header;