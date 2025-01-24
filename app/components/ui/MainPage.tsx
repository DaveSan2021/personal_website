import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { Button } from "@heroui/button"

const MainPage = () => {

    const educationDisclosure = useDisclosure();
    const researchDisclosure = useDisclosure();
    const missionDisclosure = useDisclosure();

    return (
        <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
            {/* Left Column: Text and Modal */}
            <div className="flex-1">
                <h2 className="text-4xl mb-4 text-start text-[#339989]">
                    Full stack developer and machine learning enthusiast.
                </h2>
                <br></br>
                <div className="flex flex-row justify-center items-center gap-8 mb-4">
                {/* Education Modal */}
                <div className="text-center">
                    <Button className="bg-[#131515] text-[#7de2d1]" onPress={educationDisclosure.onOpen}>Education</Button>
                    <Modal backdrop="blur" isOpen={educationDisclosure.isOpen} onOpenChange={educationDisclosure.onOpenChange}>
                        <ModalContent className="bg-[#131515] text-[#7de2d1]">
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-row gap-1">Education</ModalHeader>
                                    <ModalBody>
                                        <p>
                                            I am currently a student at the University of Maryland, College Park, studying Mathematics and Computer Science with a concentration on Statistics.
                                        </p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            Close
                                        </Button>
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                </div>

                {/* Research Modal */}
                <div className="text-center">
                    <Button className="bg-[#131515] text-[#7de2d1]" onPress={researchDisclosure.onOpen}>Research</Button>
                    <Modal isOpen={researchDisclosure.isOpen} onOpenChange={researchDisclosure.onOpenChange}>
                        <ModalContent className="bg-[#131515] text-[#7de2d1]">
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-row gap-1">Research</ModalHeader>
                                    <ModalBody>
                                        <p>
                                            As a machine learning researcher at the Robert H. Smith School of Business, I work on extracting insights from historic financial data using large language models.
                                        </p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            Close
                                        </Button>
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                </div>

                {/* Mission Modal */}
                <div className="text-center">
                    <Button className="bg-[#131515] text-[#7de2d1]" onPress={missionDisclosure.onOpen}>Mission</Button>
                    <Modal isOpen={missionDisclosure.isOpen} onOpenChange={missionDisclosure.onOpenChange}>
                        <ModalContent className="bg-[#131515] text-[#7de2d1]">
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-row gap-1">Mission</ModalHeader>
                                    <ModalBody>
                                        <p>
                                            I love finding clever solutions to complex problems and am always up for a challenge. I have experience in full stack development, machine learning, and data analysis.
                                            If you have a project you would like to collaborate on, feel free to reach out to me! I would be happy to help.
                                        </p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            Close
                                        </Button>
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                </div>
                </div>
            </div>

            {/* Right Column: Image */}
            <div className="flex justify-center flex-shrink-0">
                <Image
                    alt="Personal Image"
                    src="/BlackNWhiteBackgroundRemoved.png" // Relative path from the `public` folder
                    width={300}
                    height={300}
                    className="rounded-lg"
                />
            </div>
        </div>
    );
    
};

export default MainPage;
