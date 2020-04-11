import React from "react";
import styled from "styled-components";

const StyledFBLogo = styled.span`
  width: 2.5em;
  height: 2.5em;
`;

const FBLogo = () => {
  return (
    <StyledFBLogo>
      <svg
        width="10px"
        height="18px"
        viewBox="0 0 10 18"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Logo_Facebook</title>
        <desc>Created with Sketch.</desc>
        <g
          id="Mobile"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="iPhone-11-Copy-2"
            transform="translate(-262.000000, -1131.000000)"
            fill="#FFFFFF"
          >
            <g id="Group-4" transform="translate(0.000000, 1086.000000)">
              <path
                d="M271.239313,45.0035111 L268.936412,45 C266.349488,45 264.677212,46.7389529 264.677212,49.4298941 L264.677212,51.4726781 L262.361611,51.4726781 C262.162332,51.4726781 262,51.6362974 262,51.8392416 L262,54.7991365 C262,55.0011444 262.162332,55.1657 262.361611,55.1657 L264.677212,55.1657 L264.677212,62.6334365 C264.677212,62.8354444 264.839544,63 265.039746,63 L268.059633,63 C268.259835,63 268.422168,62.8354444 268.422168,62.6334365 L268.422168,55.1657 L271.129167,55.1657 C271.329369,55.1657 271.491009,55.0011444 271.491009,54.7991365 L271.492625,51.8392416 C271.492625,51.742334 271.453832,51.6491716 271.386174,51.579651 C271.318516,51.5110666 271.226613,51.4726781 271.130091,51.4726781 L268.422168,51.4726781 L268.422168,49.7409816 C268.422168,48.9088403 268.617982,48.4863325 269.686881,48.4863325 L271.238389,48.4853962 C271.438591,48.4853962 271.6,48.3208406 271.6,48.1188327 L271.6,45.371245 C271.6,45.1680668 271.438591,45.0044474 271.239313,45.0035111 Z"
                id="Logo_Facebook"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </StyledFBLogo>
  );
};

export default FBLogo;