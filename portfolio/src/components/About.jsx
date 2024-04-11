import React from "react";

// tech stack: html, css, javascript, typescript, react, tailwind, nodejs, expressjs, mongodb,
// tools: aws, github, postman, firebase

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-t from-neutral-200 to-neutral-100 text-neutral-950 my-[.8rem] py-8"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        {/* container */}
        <div className="max-w-[1000px] w-full px-2 py-2">
          <div className="text-center">
            <p className="text-4xl font-bold">About</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-2">
          <div className="text-center text-2xl font-bold">
            <p>Full-stack Developer. AWS Certified Cloud Practitioner.</p>
          </div>
        </div>

        {/* grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="px-4 py-4 bg-neutral-200 h-[20rem]">
            <div className="w-[30rem] float-right flex flex-col">
              <div>
                <p>Frontend</p>
              </div>
              <div>
                <p>icons</p>
              </div>
            </div>

            {/* <p className="text-neutral-950 max-w-[30rem] float-right">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum reiciendis numquam laborum quas sequi. Nam tenetur maxime voluptate cum quaerat consectetur saepe obcaecati officia labore iste placeat ea dolor dolore quisquam aliquid vel incidunt deleniti, blanditiis nobis iure perspiciatis totam debitis suscipit eveniet? Iste fugiat tenetur, tempora porro nostrum ut.</p> */}
          </div>

          <div className="px-4 py-4 bg-neutral-200 h-[20rem]">
            <p>grid 2</p>
          </div>

          <div className="px-4 py-4 bg-neutral-200 h-[20rem]">
            <p>grid 3</p>
          </div>

          <div className="px-4 py-4 bg-neutral-200 h-[20rem]">
            <p>grid 4</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
