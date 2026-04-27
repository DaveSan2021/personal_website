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
    const aboutDisclosure = useDisclosure();
    const skillsDisclosure = useDisclosure();

    return (
        <div className="flex flex-col md:flex-row items-center md:items-center gap-8 w-full">
            {/* Left Column: Text and Modals */}
            <div className="flex-1">
                <h2 className="text-4xl mb-3 text-center text-[#7de2d1]">
                    Backend Software Engineer — Golang · AWS · Distributed Systems · AI/ML Tooling
                </h2>
                <p className="text-center text-[#fffafb] opacity-60 text-base mb-5">
                    Building production-hardened backend systems and the AI infrastructure that accelerates how engineers work.
                </p>
                <div className="flex flex-row justify-center items-center gap-8 mb-4">
                {/* Education Modal */}
                <div className="text-center">
                    <Button className="bg-[#131515] text-[#7de2d1]" onPress={educationDisclosure.onOpen}>Education</Button>
                    <Modal backdrop="blur" isOpen={educationDisclosure.isOpen} onOpenChange={educationDisclosure.onOpenChange}>
                        <ModalContent className="bg-[#131515]">
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-row gap-1 text-[#7de2d1]">Education</ModalHeader>
                                    <ModalBody className="text-[#fffafb]">
                                        <p>
                                            University of Maryland, Computer Science &amp; Mathematics, 3.82 GPA. Started interning at Capital One in 2022 across Cyber, ML, and Card Tech before joining full time. If you&apos;d like to see my resume, it&apos;s in the nav above.
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

                {/* About Modal */}
                <div className="text-center">
                    <Button className="bg-[#131515] text-[#7de2d1]" onPress={aboutDisclosure.onOpen}>About</Button>
                    <Modal backdrop="blur" isOpen={aboutDisclosure.isOpen} onOpenChange={aboutDisclosure.onOpenChange}>
                        <ModalContent className="bg-[#131515]">
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-row gap-1 text-[#7de2d1]">About</ModalHeader>
                                    <ModalBody className="text-[#fffafb]">
                                        <p>
                                            I&apos;m a backend software engineer at Capital One where I own the full lifecycle of production Golang services — API architecture, containerized infrastructure, observability, and security. Seven months in, I architected the team&apos;s primary hosting infrastructure, debugged production memory leaks under 10,000+ concurrent requests, and built the AI tooling platform now used across 5 modernization teams. My work sits at the intersection of backend systems and applied AI — not AI as a product feature, but AI as an engineering force multiplier.
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

                {/* Skills Modal */}
                <div className="text-center">
                    <Button className="bg-[#131515] text-[#7de2d1]" onPress={skillsDisclosure.onOpen}>Skills</Button>
                    <Modal backdrop="blur" isOpen={skillsDisclosure.isOpen} onOpenChange={skillsDisclosure.onOpenChange}>
                        <ModalContent className="bg-[#131515]">
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-row gap-1 text-[#7de2d1]">Skills</ModalHeader>
                                    <ModalBody className="text-[#fffafb] flex flex-col gap-2">
                                        <p><span className="text-[#7de2d1] font-medium">Primary: </span>Golang, AWS (CDK, Fargate, Lambda, IAM), Docker, REST APIs, Distributed Systems</p>
                                        <p><span className="text-[#7de2d1] font-medium">Observability: </span>OpenTelemetry, K6, pprof, CloudWatch</p>
                                        <p><span className="text-[#7de2d1] font-medium">AI/ML: </span>LangChain, LangGraph, RAG, multi-agent systems, Claude Code, PyTorch, TensorFlow</p>
                                        <p><span className="text-[#7de2d1] font-medium">Databases: </span>PostgreSQL, MongoDB, DynamoDB, Snowflake</p>
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
