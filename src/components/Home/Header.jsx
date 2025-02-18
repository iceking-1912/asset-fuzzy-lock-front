// import logo from "../../assets/LOGO_VECTOR.svg";

import React from "react";

function Header() {
  const ops = React.useMemo(
    () => ["Home", "DeFiApp", "Assets", "Features", "Pricing", "FAQs", ""],
    []
  );

  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  const [opsRow, setOpsRow] = React.useState(null);

  // Update screenWidth on window resize
  React.useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Compute opsRow whenever screenWidth changes
  React.useEffect(() => {
    let count = 0;
    const newOpsRow = ops.reduce((child, str) => {
      if (screenWidth <= 1100 && count >= 3) return child;
      else if (screenWidth <= 1200 && count >= 4) return child;
      count++;
      return (
        <>
          {child}
          <div className="text-center text-white font-[700] tracking-tight font-inter">
            {str}
          </div>
        </>
      );
    }, null);
    setOpsRow(newOpsRow);
  }, [screenWidth, ops]);

  return (
    <>
      <div className=" w-full h-[150px] flex pr-5 gap-10 justify-between items-center bg-black ">
        <div className="bg-gray-900 flex-1  sm:min-w-50 sm:max-w-50">
          <svg
            className=" absolute top-12 left-12 "
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.4806 3.7439L4.23242 15.0401L25.4806 26.4169L46.7575 15.0803L25.4806 3.7439Z"
              fill="#0004FF"
            />
            <path
              d="M25.4806 26.4169V49.2517L4.23242 37.8343V15.0402L25.4806 26.4169Z"
              fill="#0004FF"
            />
            <path
              d="M25.4805 26.417L46.7574 15.0804V37.8344L25.4805 49.2518V26.417Z"
              fill="#0004FF"
            />
            <path
              d="M25.4856 12.251L12.1816 19.3239L25.4856 26.4473L38.8075 19.349L25.4856 12.251Z"
              fill="black"
            />
            <path
              d="M25.4856 26.4474V40.7445L12.1816 33.5958V19.324L25.4856 26.4474Z"
              fill="black"
            />
            <path
              d="M38.8082 19.349L25.4863 26.4473V40.7445L38.8082 33.5958V19.349Z"
              fill="black"
            />
            <path
              d="M4.07031 11.4258L11.0034 15.2319L25.4817 7.38847V0L4.07031 11.4258Z"
              fill="white"
            />
            <path
              d="M46.8931 11.4258L39.96 15.2319L25.4814 7.38847V0L46.8931 11.4258Z"
              fill="white"
            />
            <path
              d="M0.830078 16.6463L7.69067 20.2837V35.8188L0.830078 39.5066V16.6463Z"
              fill="white"
            />
            <path
              d="M7.69067 35.8188L22.0925 43.5399L22.2196 51L0.830078 39.5066L7.69067 35.8188Z"
              fill="white"
            />
            <path
              d="M50.1702 16.6464L43.3096 20.2838V35.8188L50.1702 39.5067V16.6464Z"
              fill="white"
            />
            <path
              d="M43.3092 35.8188L28.9074 43.5399L28.7803 51.0001L50.1698 39.5067L43.3092 35.8188Z"
              fill="white"
            />
          </svg>
        </div>
        <div
          className=" bg-[#161616] hidden rounded-full h-[75px] overflow-hidden    sm:flex flex-cols sm:w-[565px]  justify-between pr-5 pl-7 gap-5 items-center  
        content-center md:h-[calc(100%-75px)] shadow-[-2px_2px_30px_10px_#5e5e5e]  md:max-w-[457px] lg:max-w-[795px] flex-1 "
        >
          {opsRow}
          <div className="pr-5 pl-5 pt-3 pb-3  text-white flex items-center justify-between gap-2 bg-[#222] rounded-full">
            Protection
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 11"
              fill="none"
              // xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 10L10.5 1M10.5 1V8.8M10.5 1H2.1"
                stroke="white"
                // stroke-width="2"
                // stroke-linecap="round"
                // stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>
            <svg
              width="45"
              height="45"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="14.5"
                cy="14.5"
                r="14"
                fill="url(#paint0_radial_8_60)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_8_60"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(14.5 14.5) rotate(90) scale(14)"
                >
                  <stop />
                  <stop offset="0.34" stop-color="white" />
                  <stop offset="0.46" />
                  <stop offset="0.605" stop-color="white" />
                  <stop offset="1" stop-color="white" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="flex text-center font-extrabold text-white shadow-[-2px_2px_30px_10px_#5e5e5e] pl-5 p-3 rounded-3xl  tracking-tight font-inter gap-2  flex-2 xs:flex-1 xs:min-w-75 sm:max-w-50">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 22.88C1.44 20.7467 4.344 16.352 12.44 15.84"
              stroke="white"
              // stroke-width="2"
            />
            <path
              d="M23 22.88C22.56 20.7467 19.656 16.352 11.56 15.84"
              stroke="white"
              // stroke-width="2"
            />
            <circle
              cx="11.5595"
              cy="7.04"
              r="6.04"
              stroke="white"
              // stroke-width="2"
            />
            <path d="M11.5596 16.28V13.2" stroke="white"  />
          </svg>
          Create Account
        </div>
      </div>
    </>
  );
}

export default Header;
