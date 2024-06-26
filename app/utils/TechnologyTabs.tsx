import Image from "next/image";
import NextJsIcon from "@public/Assets/icon/nextJsIcon.png"
import NodeJsIcon from "@public/Assets/icon/NodeJsIcon.png"
import ReactjsIcon from "@public/Assets/icon/reactjsIcon2.png"
import PhpIcon from "@public/Assets/icon/phpIcon.png"
import java from "@public/Assets/java.png"
import wordpress from "@public/Assets/wordpress.png"
import net from "@public/Assets/net.png"
import nestjs from "@public/Assets/nestjs.png"

const TechnologyTabs = () => {
    return (
        <div className="container mx-auto px-4 pt-2 sm:pt-10" id="default-tab-content">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div className="bg-gray p-4 relative rounded-3xl hover:bg-white hover:shadow-2xl" data-aos="zoom-in" data-aos-delay="100">
                    <div className="flex justify-center h-48">
                        <Image
                            src={NextJsIcon}
                            alt="Your Name"
                            className="absolute top-16 mx-auto z-10"
                        />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Next JS</h2>
                </div>

                <div className="bg-gray p-4 relative rounded-3xl hover:bg-white hover:shadow-2xl" data-aos="zoom-in" data-aos-delay="100">
                    <div className="flex justify-center h-48">
                        <Image
                            src={ReactjsIcon}
                            alt="Your Name"
                            className="absolute top-16 mx-auto z-10"
                        />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">React Js</h2>
                </div>

                <div className="bg-gray p-4 relative rounded-3xl hover:bg-white hover:shadow-2xl" data-aos="zoom-in" data-aos-delay="100">
                    <div className="flex justify-center h-48">
                        <Image
                            src={NodeJsIcon}
                            alt="Your Name"
                            className="absolute top-16 mx-auto z-10"
                        />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Node Js</h2>
                </div>

                <div className="bg-gray p-4 relative rounded-3xl hover:bg-white hover:shadow-2xl" data-aos="zoom-in" data-aos-delay="100">
                    <div className="flex justify-center h-48">
                        <Image
                            src={PhpIcon}
                            alt="Your Name"
                            className="absolute top-16 mx-auto z-10"
                        />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">PHP</h2>
                </div>

                <div className="sm:mb-10 bg-gray p-4 relative rounded-3xl hover:bg-white hover:shadow-2xl" data-aos="zoom-in" data-aos-delay="100">
                    <div className="flex justify-center h-48">
                        <Image
                            src={java}
                            alt="Your Name"
                            className="absolute top-16 mx-auto z-10 max-w-32"
                        />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Java</h2>
                </div>

                <div className="sm:mb-10 bg-gray p-4 relative rounded-3xl hover:bg-white hover:shadow-2xl" data-aos="zoom-in" data-aos-delay="100">
                    <div className="flex justify-center h-48">
                        <Image
                            src={wordpress}
                            alt="Your Name"
                            className="absolute top-16 mx-auto z-10 max-w-32"
                        />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Wordpress</h2>
                </div>

                <div className="sm:mb-10 bg-gray p-4 relative rounded-3xl hover:bg-white hover:shadow-2xl" data-aos="zoom-in" data-aos-delay="100">
                    <div className="flex justify-center h-48">
                        <Image
                            src={net}
                            alt="Your Name"
                            className="absolute top-16 mx-auto z-10 max-w-32"
                        />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Net</h2>
                </div>

                <div className="sm:mb-10 bg-gray p-4 relative rounded-3xl hover:bg-white hover:shadow-2xl" data-aos="zoom-in" data-aos-delay="100">
                    <div className="flex justify-center h-48">
                        <Image
                            src={nestjs}
                            alt="Your Name"
                            className="absolute top-16 mx-auto z-10 max-w-32"
                        />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Nest</h2>
                </div>
            </div>
        </div>
    )
}

export default TechnologyTabs;
