// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 83 83"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".2"}
        d={
          "M8.378 83C5.992 83 4 82.201 2.402 80.603.8 79.003 0 77.008 0 74.623V8.377C0 5.992.8 4 2.402 2.402 4 .8 5.992 0 8.378 0h66.244c2.386 0 4.378.8 5.976 2.402C82.2 4 83 5.992 83 8.378v66.244c0 2.386-.799 4.378-2.397 5.976C79.003 82.2 77.008 83 74.623 83H8.377zm0-5.188h66.244c.796 0 1.527-.331 2.195-.995.664-.668.996-1.4.996-2.195V8.378c0-.796-.332-1.527-.996-2.194-.668-.665-1.4-.997-2.195-.997H8.378c-.796 0-1.527.332-2.194.997-.665.667-.997 1.398-.997 2.194v66.244c0 .796.332 1.527.997 2.195.667.664 1.398.996 2.194.996zm9.778-12.968h47.487L50.978 45.287l-13.566 17.16-9.078-10.971-10.178 13.368z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
