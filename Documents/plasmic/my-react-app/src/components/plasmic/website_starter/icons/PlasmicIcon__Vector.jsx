// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function VectorIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 83 96"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".2"}
        d={
          "M8.378 95.152c-2.386 0-4.378-.915-5.976-2.747C.8 90.569 0 88.284 0 85.548V9.604c0-2.735.8-5.019 2.402-6.85C4 .917 5.992 0 8.378 0h66.244c2.386 0 4.378.918 5.976 2.753C82.2 4.585 83 6.87 83 9.604v75.944c0 2.736-.799 5.02-2.397 6.851-1.6 1.836-3.595 2.753-5.98 2.753H8.377zm0-5.947h66.244c.796 0 1.527-.38 2.195-1.141.664-.766.996-1.604.996-2.516V9.604c0-.911-.332-1.75-.996-2.515-.668-.761-1.4-1.142-2.195-1.142H8.378c-.796 0-1.527.38-2.194 1.142-.665.765-.997 1.604-.997 2.515v75.944c0 .912.332 1.75.997 2.516.667.76 1.398 1.141 2.194 1.141zm9.778-14.867h47.487l-14.665-22.42L37.412 71.59l-9.078-12.578-10.178 15.326z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
