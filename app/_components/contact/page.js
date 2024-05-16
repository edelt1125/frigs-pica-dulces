import Image from "next/image"

export default function Contact() {
    return (
        <div className="text-center my-8" id="contact">
            <h1 className="font-bold text-4xl mt-10">Contact Us</h1>
            <div className="my-6 space-y-4">
                <div>
                    <a className="text-4xl underline text-gray-500" href="https://m.me/FRIGSPICAD">
                        <Image src="/messenger.png" width={50} height={50} className="mx-auto" />
                    </a>
                </div>
                <div>
                    <a className="text-4xl underline text-gray-500" href="mailto:frigspicadulces@gmail.com">
                        <Image src="/mail.png" width={70} height={70} className="mx-auto" />
                    </a>
                </div>
            </div>
            <footer className="text-sm mb-8">
                &copy; 2024 All Rights Reserved
            </footer>
        </div>
    )
}