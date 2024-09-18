"use client";

import { useEffect, useRef } from "react";
import "../styles/cloud.css";

export function Cloud() {
  const svgRef = useRef<SVGSVGElement>(null);

  function getRandomPosition() {
    const x = window.innerWidth - (svgRef.current?.clientWidth || 0);
    const y = window.innerHeight - (svgRef.current?.clientHeight || 0);
    const randomX = Math.floor(Math.random() * x);
    const randomY = Math.floor(Math.random() * y);
    return { x: randomX, y: randomY };
  }

  useEffect(() => {
    console.log("useEffect hook running");
    const newPos = getRandomPosition();

    if (svgRef.current) {
      svgRef.current.style.position = "absolute";
      svgRef.current.style.left = `${newPos.x}px`;
      svgRef.current.style.top = `${newPos.y}px`;
    }
  }, []);

  // function getRandomPosition() {
  //     if (svgRef.current) {
  //         const x = window.innerWidth - svgRef.current.clientWidth;
  //         const y = window.innerHeight - svgRef.current.clientHeight;
  //         const randomX = Math.floor(Math.random() * x);
  //         const randomY = Math.floor(Math.random() * y);
  //         return { x: randomX, y: randomY };
  //     }
  // }

  // const initialPosition = getRandomPosition();

  return (
    <>
      <div className="flex justify-around bg-gradient-to-tl from-sky-400 to-sky-100">
        <svg
          ref={svgRef}
          width="600"
          height="380"
          viewBox="0 0 444 347"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            left: "1rem",
            bottom: "1rem",
          }}
        >
          <g className="float-css" filter="url(#filter0_d_6_59)">
            <path
              d="M403 117.128C434 117.128 462 193.128 403 209.128C409 260 374 284 323 260C329 307 267 327 230 298C194 336 90 319 79 248C6 260 -13 199 21 156.128C-15.0001 84.1276 71 24.1276 133 61.1276C143 -20.8725 265 -11.8725 285 47.1275C335 8.12753 413 47.1276 403 117.128Z"
              fill="white"
            />
            <path
              d="M403 117.128C434 117.128 462 193.128 403 209.128C409 260 374 284 323 260C329 307 267 327 230 298C194 336 90 319 79 248C6 260 -13 199 21 156.128C-15.0001 84.1276 71 24.1276 133 61.1276C143 -20.8725 265 -11.8725 285 47.1275C335 8.12753 413 47.1276 403 117.128Z"
              stroke="#DBD3D3"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_6_59"
              x="0.173836"
              y="0.735909"
              width="441.857"
              height="325.496"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_6_59"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_6_59"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </>
  );
}

export function SecondCloud() {
  return (
    <div className="flex items-center justify-center rounded-lg bg-transparent">
      <svg
        width="600"
        height="380"
        viewBox="0 0 473 351"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          left: "5rem",
          top: "7rem",
        }}
      >
        <g className="second-float-css" filter="url(#filter0_d_5_57)">
          <path
            d="M163 36.9999C137 -4 80.0002 10 80.0002 56C1 56 -25.9999 154 51 187C14.9999 259 101 319 163 282C173 364 295 355 315 296C365 335 443 296 433 226C464 226 492 150 433 134C453 83 407 36.9999 350 69C321 -12 228 -19 163 36.9999Z"
            fill="white"
          />
          <path
            d="M163 36.9999C137 -4 80.0002 10 80.0002 56C1 56 -25.9999 154 51 187C14.9999 259 101 319 163 282C173 364 295 355 315 296C365 335 443 296 433 226C464 226 492 150 433 134C453 83 407 36.9999 350 69C321 -12 228 -19 163 36.9999Z"
            stroke="#DBD3D3"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_5_57"
            x="0.651245"
            y="0.0800781"
            width="471.38"
            height="350.312"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_5_57"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_5_57"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export function ThirdCloud() {
  return (
    <svg
      width="500"
      height="200"
      viewBox="0 0 465 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
      }}
    >
      <g className="third-float-css" filter="url(#filter0_d_6_63)">
        <path
          d="M148.183 223.009C98.8341 255.585 49.485 238.439 39.4324 194.719C-4.43336 184.432 -6.2611 124.423 33.9492 102.992C39.4324 30.9813 113.456 16.4078 183.824 42.1257C216.723 -6.73837 304.455 -14.4537 356.546 30.9813C403.153 12.9787 440.622 36.1249 440.622 87.5608C467.124 114.993 467.124 156.142 433.311 184.432C426 223.009 372.081 256.442 304.455 223.009C247.795 262.443 190.221 258.157 148.183 223.009Z"
          fill="white"
        />
        <path
          d="M148.183 223.009C98.8341 255.585 49.485 238.439 39.4324 194.719C-4.43336 184.432 -6.2611 124.423 33.9492 102.992C39.4324 30.9813 113.456 16.4078 183.824 42.1257C216.723 -6.73837 304.455 -14.4537 356.546 30.9813C403.153 12.9787 440.622 36.1249 440.622 87.5608C467.124 114.993 467.124 156.142 433.311 184.432C426 223.009 372.081 256.442 304.455 223.009C247.795 262.443 190.221 258.157 148.183 223.009Z"
          stroke="#DBD3D3"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_6_63"
          x="0.602699"
          y="0.339233"
          width="463.565"
          height="259.161"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_6_63"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_6_63"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export function Clouds() {
  return (
    <>
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="first-cloud"
      >
        <g filter="url(#filter0_d_19_99)">
          <path
            d="M147.183 222.169C97.8341 254.745 48.485 237.6 38.4324 193.88C-5.43336 183.593 -7.2611 123.584 32.9492 102.152C38.4324 30.142 112.456 15.5686 182.824 41.2865C215.723 -7.57758 303.455 -15.293 355.546 30.1421C402.153 12.1395 439.622 35.2857 439.622 86.7215C466.124 114.154 466.124 155.303 432.311 183.593C425 222.169 371.081 255.603 303.455 222.169C246.795 261.604 189.221 257.317 147.183 222.169Z"
            fill="white"
          />
        </g>
        <path
          d="M371.962 34.6065C393.155 31.3937 416.91 44.2478 423.345 60.5481"
          stroke="#F8F6F6"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M381.447 47.5108C390.976 47.6329 395.807 48.8653 401.582 57.5284"
          stroke="#F8F6F6"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M145.548 220.729C95.3112 231.786 72.1452 225.281 39.923 190.725C49.0512 220.15 59.7525 227.552 84.8884 235.29C111.605 237.039 125.005 233.487 145.548 220.729Z"
          fill="#F5F5F5"
          stroke="#F5F5F5"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M302.093 220.254C239.654 243.861 206.167 243.919 149.145 220.254C171.77 238.569 188.035 245.415 225.764 247.702C258.85 243.985 274.897 235.883 302.093 220.254Z"
          fill="#F5F5F5"
          stroke="#F5F5F5"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M431.515 180.264C395.024 223.832 369.975 233.022 305.36 218.786C336.291 232.71 355.048 236.76 386.163 228.908C416.602 218.681 422.26 203.574 431.515 180.264Z"
          fill="#F5F5F5"
          stroke="#F5F5F5"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M192.769 111.014C163.989 77.9754 119.175 83.6223 104.883 130.258"
          stroke="#F5F5F5"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M253.367 108.581C229.496 86.8264 201.288 89.8105 185.208 123.136"
          stroke="#F5F5F5"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M39.1771 190.145L15.4863 176.732C19.3726 182.804 23.3615 185.088 29.2478 188.229C38.7198 190.842 39.1771 192.758 39.1771 190.145Z"
          stroke="#F5F5F5"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.3794 177.369L10.7433 173.211L15.4173 174.609L13.3794 177.369Z"
          fill="#F5F5F5"
        />
        <path
          d="M10.7433 173.211L10.8866 172.732L9.60454 172.349L10.321 173.479L10.7433 173.211ZM13.3794 177.369L12.9571 177.637C13.0455 177.776 13.1968 177.863 13.3617 177.869C13.5266 177.875 13.6837 177.799 13.7817 177.666L13.3794 177.369ZM15.4173 174.609L15.8196 174.906C15.9163 174.775 15.9431 174.605 15.8916 174.451C15.8401 174.297 15.7166 174.177 15.5606 174.13L15.4173 174.609ZM10.321 173.479L12.9571 177.637L13.8017 177.102L11.1656 172.943L10.321 173.479ZM13.7817 177.666L15.8196 174.906L15.0151 174.312L12.9772 177.072L13.7817 177.666ZM15.5606 174.13L10.8866 172.732L10.6 173.69L15.274 175.088L15.5606 174.13Z"
          fill="#F5F5F5"
        />
        <path
          d="M405.946 203.276L433.21 182.174L438.207 168.532L405.946 203.276Z"
          fill="white"
          stroke="white"
          stroke-linecap="round"
        />
        <defs>
          <filter
            id="filter0_d_19_99"
            x="0.102684"
            y="-1.52588e-05"
            width="462.565"
            height="258.161"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_19_99"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_19_99"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="second-cloud"
      >
        <g filter="url(#filter0_d_24_12)">
          <path
            d="M403 116.128C434 116.128 462 192.128 403 208.128C409 259 374 283 323 259C329 306 267 326 230 297C194 335 90 318 79 247C6 259 -13 198 21 155.128C-15.0001 83.1276 71 23.1276 133 60.1276C143 -21.8725 265 -12.8725 285 46.1275C335 7.12753 413 46.1276 403 116.128Z"
            fill="white"
          />
        </g>
        <path
          d="M226.993 297.003C158.936 314.258 120.839 295.717 81.1411 246.22C91.4912 282.98 106.428 294.606 139.014 308.914C179.57 319.094 199.964 316.306 226.993 297.003Z"
          fill="#F5F5F5"
          stroke="#F5F5F5"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M78.7174 243.386C19.9184 229.777 5.01296 213.808 21.8785 157.781C6.84031 181.062 2.21276 200.203 13.2977 222.649C24.3826 245.094 50.3126 247.424 78.7174 243.386Z"
          fill="#F5F5F5"
          stroke="#F5F5F5"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M159.461 104.255C172.535 62.4344 215.839 49.5933 247.67 86.5518"
          stroke="#F5F5F5"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M102.995 126.383C116.109 96.8687 143.138 88.2633 171.257 112.315"
          stroke="#F5F5F5"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M316.733 45.286C336.499 38.515 365.458 50.1463 378.602 68.2694"
          stroke="#F8F6F6"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M331.509 59.0081C341.044 57.7937 346.362 58.5451 355.692 67.8416"
          stroke="#F8F6F6"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <defs>
          <filter
            id="filter0_d_24_12"
            x="0.67437"
            y="0.235886"
            width="440.857"
            height="324.496"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_24_12"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_24_12"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="third-cloud"
      >
        <g filter="url(#filter0_d_28_58)">
          <path
            d="M162 36.9999C136 -4 79.0002 10 79.0002 56C0 56 -26.9999 154 50 187C13.9999 259 100 319 162 282C172 364 294 355 314 296C364 335 442 296 432 226C463 226 491 150 432 134C452 83 406 36.9999 349 69C320 -12 227 -19 162 36.9999Z"
            fill="white"
          />
        </g>
        <path
          d="M373.357 72.539C400.971 71.3312 414.275 81.0767 419.884 102.1"
          stroke="#F8F6F6"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M374.075 89.7559C386.239 91.1527 392.218 93.3099 398.21 104.791"
          stroke="#F8F6F6"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M313.847 295.422C247.297 339.775 214.879 336.064 162.268 281.757C170.018 316.604 184.978 335.776 229.657 341.579C275.754 341.579 300.17 325.487 313.847 295.422Z"
          fill="#F5F5F5"
          stroke="#F5F5F5"
          stroke-linecap="round"
        />
        <path
          d="M49.9434 188.43C52.2532 262.141 78.3342 281.626 161.832 281.589C133.39 297.429 97.4159 297.577 65.7172 272.07C39.3586 245.145 36.8202 218.404 49.9434 188.43Z"
          fill="#F5F5F5"
          stroke="#F5F5F5"
          stroke-linecap="round"
        />
        <defs>
          <filter
            id="filter0_d_28_58"
            x="0.151428"
            y="0.580154"
            width="470.38"
            height="349.312"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_28_58"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_28_58"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
}
