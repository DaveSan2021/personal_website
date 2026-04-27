"use client";

export default function Page() {
    return (
        <main style={{ backgroundColor: '#FFFFFF00' }} className="flex min-h-screen flex-col items-center justify-evenly bg-white">

            {/*<div className="text-5xl ml-10 mr-10 pt-6 pb-6"> Resume </div>*/}
            <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
                <iframe 
                src="Resume-4-26-26.pdf" 
                style={{ width: "100%", height: "100%" }} 
            />
            </div>

        </main>
    );
}