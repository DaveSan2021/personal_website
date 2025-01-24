'use client'
import Image from "next/image";
import { projects } from "./projects";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { Button } from "@heroui/button"
import React from "react";

const ProjectsShowcase = () => {
  // Create an array of useDisclosure hooks for each project
  const [backdrop, setBackdrop] = React.useState("blur");
  const [size, setSize] = React.useState("2xl");

  // Create an array of useDisclosure hooks for each project
  const disclosureStates = projects.map(() => useDisclosure());

  const handleOpen = (index, backdrop, size) => {
    disclosureStates[index].onOpen(); // Open the modal
    console.log("Setting backdrop to:", backdrop); 
    setBackdrop(backdrop); // Set backdrop to blur when modal opens
    setSize(size);
  };

  const handleClose = (index:number) => {
    disclosureStates[index].onClose(); // Close the modal
  };
  
  const backdropStyle = backdrop === "blur" ? {
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)', // Safari support
  } : {};
  
  
  return (
    <div className="text-white">
      <h2 className="text-5xl mb-4 text-center text-[#7de2d1]">Showcase</h2>
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col md:flex-row`}
            >
              {/* Description */}
              <div
                className={`md:w-2/3 w-full md:pr-8`}
              >
                <h3 className="text-2xl font-semibold mb-4 text-[#339989]">
                  {project.title}
                </h3>
                <p className="text-[#fffafb]">
                  {project.tldr}
                </p>
                
                {/*Buttons Div*/}
                <div className="flex flex-row justify-center mt-4 items-center gap-8">
                  <Button
                    onPress={() => handleOpen(index, "blur", size)} // Use onOpen for this specific project
                    className="bg-[#131515] text-[#7de2d1]"
                  >
                    Full Description
                  </Button>
                  <Button 
                    as="a" // Makes this button an anchor
                    href={project.link} // GitHub repo URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#131515] text-[#7de2d1] hover:underline"
                    >
                    Github Repo &rarr;
                  </Button>
                </div>
                
              </div>

              {/* Screenshot */}
              <div className="md:w-1/3 w-full mt-6 md:mt-0">
                <Image
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                  placeholder="blur"
                  blurDataURL="/images/placeholder.png" // Optional: Add a placeholder image
                />
              </div>

              {/* Modal */}
              <Modal 
                backdrop={backdrop} 
                size={size} 
                isOpen={disclosureStates[index].isOpen} 
                onClose={() => handleClose(index)}
                >

                <ModalContent className="bg-[#131515]">
                  <ModalHeader className="text-[#7de2d1]">{project.title}</ModalHeader>
                  <ModalBody className="text-[#fffafb]">
                    <p>{project.description}</p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={() => handleClose(index)}>
                      Close
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;
