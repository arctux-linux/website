interface LogoPropx {
  arcColor?: string;
  tuxColor?: string;
  sloganColor?: string;
  showSlogan?: boolean;
}

export function Logo({
  arcColor = "#ffffff",
  tuxColor = "#0ea5e9",
  sloganColor = "#ffffff",
  showSlogan = true,
}: LogoPropx) {
  const height = showSlogan ? 157 : 94.5;
  return (
    <svg viewBox={`0 0 365 ${height}`} height={height} width="365">
      <g id="logo-group" transform="translate(-329.7171,-305.60328)">
        <g
          id="logo-center"
          inkscape:export-filename="logo-red-white.png"
          inkscape:export-xdpi="20.48"
          inkscape:export-ydpi="20.48"
        >
          {showSlogan && (
            <g id="slogan">
              <path
                id="path439013"
                d="M 474.571,-22.24 V 1.12 h 16.256 V -3.648 H 479.595 V -23.84 Z"
                stroke-width="0"
                stroke-linejoin="miter"
                stroke-miterlimit="2"
                fill={sloganColor}
                stroke={sloganColor}
                transform="matrix(1.67,0,0,1.67,-345.55544,460.20568)"
              />
              <path
                id="path439015"
                d="M 492.1915,-15.744 V 1.12 h 4.832 v -18.464 z"
                stroke-width="0"
                stroke-linejoin="miter"
                stroke-miterlimit="2"
                fill={sloganColor}
                stroke={sloganColor}
                transform="matrix(1.67,0,0,1.67,-345.55544,460.20568)"
              />
              <path
                id="path439017"
                d="m 513.572,-14.048 c -1.504,-1.536 -3.552,-2.368 -5.696,-2.368 -1.12,0 -2.24,0.224 -3.232,0.672 v -1.152 h -4.8 v 7.84 c -0.032,0.224 -0.032,0.48 -0.032,0.704 h 0.032 V 1.12 h 4.8 V -8.8 c 0.224,-1.6 1.6,-2.816 3.232,-2.816 1.792,0 3.264,1.472 3.264,3.264 V 1.12 h 4.8 v -9.472 c 0,-2.144 -0.832,-4.16 -2.368,-5.696 z"
                stroke-width="0"
                stroke-linejoin="miter"
                stroke-miterlimit="2"
                fill={sloganColor}
                stroke={sloganColor}
                transform="matrix(1.67,0,0,1.67,-345.55544,460.20568)"
              />
              <path
                id="path439019"
                d="m 525.8655,1.312 c 2.112,0 4.128,-0.832 5.632,-2.336 1.536,-1.504 2.368,-3.52 2.368,-5.664 v -10.016 h -4.8 v 10.016 c 0,1.792 -1.44,3.2 -3.2,3.2 -1.792,0 -3.2,-1.408 -3.2,-3.2 v -10.016 h -4.8 v 10.016 c 0,2.144 0.832,4.16 2.336,5.664 1.504,1.504 3.52,2.336 5.664,2.336 z"
                stroke-width="0"
                stroke-linejoin="miter"
                stroke-miterlimit="2"
                fill={sloganColor}
                stroke={sloganColor}
                transform="matrix(1.67,0,0,1.67,-345.55544,460.20568)"
              />
              <path
                id="path439021"
                d="m 543.0335,-3.808 3.68,4.928 h 5.728 l -6.528,-8.992 6.464,-8.832 h -5.824 l -3.552,4.928 -3.488,-4.928 h -5.856 l 6.496,8.8 -6.464,9.024 h 5.664 z"
                stroke-width="0"
                stroke-linejoin="miter"
                stroke-miterlimit="2"
                fill={sloganColor}
                stroke={sloganColor}
                transform="matrix(1.67,0,0,1.67,-345.55544,460.20568)"
              />
            </g>
          )}
          <g id="title">
            <path
              id="path439024"
              d="m 439.24962,-9.936 4.608,12.456 h 11.952 l -21.38399,-56.16 h -9.72001 l -21.312,56.16 h 12.024 l 4.536,-12.456 z m -9.72,-26.496 5.904,15.984 h -11.66399 z"
              stroke-width="0"
              stroke-linejoin="miter"
              stroke-miterlimit="2"
              fill={arcColor}
              stroke={arcColor}
              transform="matrix(1.67,0,0,1.67,-343.95025,395.18208)"
            />
            <path
              id="path439026"
              d="M 456.87387,-15.192 V 2.52 h 10.8 v -17.712 c 0,-6.984 5.688,-12.6 12.6,-12.6 v -10.8 c -3.16799,0 -6.19199,0.576 -9.072,1.8 -2.808,1.224 -5.328,2.88 -7.416,5.04 -2.16,2.16 -3.888,4.68 -5.04,7.416 -1.22399,2.88 -1.872,5.976 -1.872,9.144 z"
              stroke-width="0"
              stroke-linejoin="miter"
              stroke-miterlimit="2"
              fill={arcColor}
              stroke={arcColor}
              transform="matrix(1.67,0,0,1.67,-343.95025,395.18208)"
            />
            <path
              id="path439028"
              d="m 499.562,3.024 c 6.768,0 13.104,-3.312 16.92,-8.856 l -8.928,-6.12 c -1.8,2.592 -4.752,4.176 -7.992,4.176 -5.328,0 -9.72,-4.32 -9.72,-9.72 0,-5.328 4.392,-9.72 9.72,-9.72 3.168,0 6.12,1.584 7.992,4.176 l 8.784,-6.264 c -1.872,-2.592 -4.32,-4.824 -7.2,-6.336 -2.88,-1.512 -6.264,-2.376 -9.576,-2.376 -2.736,0 -5.472,0.576 -7.992,1.656 -2.448,1.008 -4.608,2.52 -6.552,4.392 -1.872,1.872 -3.312,4.104 -4.392,6.48 -1.008,2.592 -1.584,5.256 -1.584,7.992 0,2.808 0.576,5.472 1.584,7.992 1.08,2.448 2.52,4.68 4.392,6.552 1.944,1.872 4.104,3.384 6.552,4.392 2.52,1.08 5.256,1.584 7.992,1.584 z"
              stroke-width="0"
              stroke-linejoin="miter"
              stroke-miterlimit="2"
              fill={arcColor}
              stroke={arcColor}
              transform="matrix(1.67,0,0,1.67,-343.95025,395.18208)"
            />
            <path
              id="path439030"
              d="m 530.34087,-19.008 v -8.496 h 11.448 v -10.08 h -11.448 v -12.888 l -10.79999,3.6 v 27.864 c 0,3.024 0.576,5.976 1.72799,8.712 1.15201,2.664 2.736,5.04 4.82401,7.056 2.01599,2.016 4.39199,3.672 7.05599,4.752 2.736,1.152 5.616,1.728 8.64,1.728 v -10.8 c -6.336,0 -11.448,-5.112 -11.448,-11.448 z"
              stroke-width="0"
              stroke-linejoin="miter"
              stroke-miterlimit="2"
              fill={tuxColor}
              stroke={tuxColor}
              transform="matrix(1.67,0,0,1.67,-343.95025,395.18208)"
            />
            <path
              id="path439032"
              d="m 561.9005,2.952 c 4.752,0 9.288,-1.872 12.672,-5.256 3.456,-3.384 5.328,-7.92 5.328,-12.744 v -22.536 h -10.8 v 22.536 c 0,4.032 -3.24,7.2 -7.2,7.2 -4.032,0 -7.2,-3.168 -7.2,-7.2 v -22.536 h -10.8 v 22.536 c 0,4.824 1.872,9.36 5.256,12.744 3.384,3.384 7.92,5.256 12.744,5.256 z"
              stroke-width="0"
              stroke-linejoin="miter"
              stroke-miterlimit="2"
              fill={tuxColor}
              stroke={tuxColor}
              transform="matrix(1.67,0,0,1.67,-343.95025,395.18208)"
            />
            <path
              id="path439034"
              d="m 600.5285,-8.568 8.28,11.088 h 12.888 l -14.688,-20.232 14.544,-19.872 h -13.104 l -7.992,11.088 -7.848,-11.088 h -13.176 l 14.616,19.8 -14.544,20.304 h 12.744 z"
              stroke-width="0"
              stroke-linejoin="miter"
              stroke-miterlimit="2"
              fill={tuxColor}
              stroke={tuxColor}
              transform="matrix(1.67,0,0,1.67,-343.95025,395.18208)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
