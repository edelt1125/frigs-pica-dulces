import Image from "next/image"

export default function MenuPage() {
    return (
        <div className="mt-10 text-center" id="menu">
            <h1 className="font-bold text-4xl">Menu</h1>
            <Image src="/menu.jpg" width={330} height={330} className="mx-auto mt-8"/>
        </div>
    )
}