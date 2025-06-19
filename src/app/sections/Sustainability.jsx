"use client";
import React, { useEffect, useRef } from "react";
import { FaLeaf, FaRecycle, FaHandsHelping, FaShieldAlt } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Sustainability = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".fade-in");

    elements.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="sustainability"
      ref={sectionRef}
      className="center flex flex-col h-auto md:h-screen bg-[#e7e7e7] py-20 px-4 md:px-10 lg:px-20 pt-28 snap-start"
    >
      <div className="max-w-[1240px] mx-auto text-center mb-10 fade-in">
        <h2 className="text-2xl md:text-9xl font-bold text-gray-800 mb-4 max">
          Sustainability & Ethics
        </h2>
        <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto">
          At Raan Sports Knit Wear Ltd., sustainability isn't an afterthought —
          it’s part of our DNA. We actively integrate ethical and
          environmentally conscious decisions into our manufacturing processes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 fade-in">
        {/* Item 1 */}
        <div className="bg-white rounded-3xl p-6 flex items-start space-x-4">
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2 flex align-center gap-2">
          <FaLeaf className="text-green-500 text-2xl md:text-xl mt-1" />
              Eco-Friendly Materials
            </h4>
            <p className="text-gray-600">
              We embrace eco-conscious fabrics and dyes, minimizing harm to the
              planet without compromising product quality.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="bg-white rounded-3xl  p-6 flex items-start space-x-4">
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2 flex align-center gap-2">
          <FaRecycle className="text-yellow-500 text-2xl md:text-xl mt-1" />
              Responsible Waste Management
            </h4>
            <p className="text-gray-600">
              Our advanced waste control systems ensure reduced environmental
              impact and improved operational efficiency.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="bg-white rounded-3xl  p-6 flex items-start space-x-4">
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2 flex align-center gap-2">
          <FaHandsHelping className="text-blue-5002text-2xl md:text-xl mt-1" />
              Fair Labor & Safe Workplaces
            </h4>
            <p className="text-gray-600">
              We strictly follow fair labor practices, ensuring safety,
              dignity, and equal opportunity for every employee.
            </p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="bg-white rounded-3xl  p-6 flex items-start space-x-4">
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2 flex align-center gap-2">
          <FaShieldAlt className="text-purple-500 2ext-6xl md:text-xl mt-1" />
              Global Compliance
            </h4>
            <p className="text-gray-600">
              We meet international labor, ethical, and safety standards,
              maintaining transparency in every step of our operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
