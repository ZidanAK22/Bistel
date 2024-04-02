import { Image } from "@nextui-org/react";

export default function ProductPage () {
    return (
        <div className=" flex flex-row justify-evenly p-20">
            <div className="text-center">
                <Image src="sambel.jpg" width={360}/>
                <p className="font-bold text-xl mt-3">
                    Sambel
                </p>
                <p className="text-lg font-light">
                    Rp. xxx
                </p>
                <p className="mt-5">
                    Lorem ipsum dolor sit amet
                </p>
            </div>
            <div className="text-center">
                <Image src="chatime.jpg" width={360}/>
                <p className="font-bold text-xl mt-3">
                    Boba
                </p>
                <p className="text-lg font-light">
                    Rp. xxx
                </p>
                <p className="mt-5">
                    Lorem ipsum dolor sit amet
                </p>
            </div>
            <div className="text-center">
                <Image src="seblak.jpg" width={360}/>
                <p className="font-bold text-xl mt-3">
                    Seblak
                </p>
                <p className="text-lg font-light">
                    Rp. xxx
                </p>
                <p className="mt-5">
                    Lorem ipsum dolor sit amet
                </p>
            </div>
        </div>
    );
}