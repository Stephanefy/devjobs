import * as React from "react"

const SvgComponent = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={600}
    height={300}
    viewBox="0 -100 1100 800"
    {...props}
  >
    <g fill="#f2f2f2">
      <path d="M767.741 251.996c.22-3.362-7.668-5.003-7.31-7.946.357-2.931 8.313-2.322 16.723-7.617 1.517-.955 11.075-6.973 10.143-11.488-1.767-8.558-39.665-4.19-43.353-16.64-.81-2.732-.058-6.565-2.29-15.153-.888-3.416-1.625-5.189-3.131-5.748-2.137-.794-3.954 1.548-9.198 5.01-7.866 5.19-9.303 3.567-14.947 8.14-4.19 3.396-5.598 6.074-7.422 5.534-2.582-.763-1.429-6.619-4.384-8.048-3.016-1.458-8.275 2.677-11.498 6.262-6.047 6.73-6.674 13.473-8.684 19.64-2.185 6.7-7.025 15.85-19.033 25.274l-109.61 79.788c23.074-15.973 87.6-58.887 112.741-74.039 7.258-4.374 14.88-8.631 23.201-6.673 8.012 1.885 15.706 9.305 28.622 14.228 1.508.575 5.728 2.122 7.627.318 1.571-1.491.126-3.914 1.571-5.328 1.939-1.897 6.114.923 12.956 1.889 4.824.68 8.523.093 11.703-.411.959-.153 15.28-2.516 15.573-6.992Z" />
      <path d="M582.539 206.675c-1.587-1.078-4.668 2.32-6.009 1.295-1.336-1.02 1.259-4.75 1.086-10.406-.03-1.02-.226-7.447-2.711-8.292-4.71-1.602-13.502 18.259-20.676 16.477-1.575-.391-3.24-1.866-8.098-3.248-1.933-.55-3.016-.7-3.725-.122-1.006.82-.38 2.387-.195 5.96.278 5.358-.933 5.595-.317 9.685.458 3.036 1.366 4.5.574 5.24-1.12 1.046-3.66-1.21-5.215-.172-1.586 1.06-1.074 4.834-.243 7.45 1.557 4.91 4.687 7.164 7.133 9.93 2.658 3.005 5.753 8.021 6.913 16.633l7.535 76.819c-1.182-15.934-3.627-59.986-3.81-76.697-.052-4.824.057-9.793 3.42-13.312 3.236-3.388 9.098-5.024 15.24-9.943.718-.574 2.695-2.199 2.358-3.652-.279-1.2-1.885-1.19-2.162-2.308-.372-1.499 2.217-2.734 4.665-5.814 1.726-2.171 2.505-4.156 3.175-5.862.202-.515 3.174-8.226 1.062-9.661ZM609.258 235.387l4.876-9.165.877-.347c4.06-1.603 7.083-3.813 8.99-6.57.303-.439.584-.893.87-1.355 1.134-1.832 2.543-4.109 5.456-5.894 1.627-.992 5.714-3.072 8.158-.794.663.605.987 1.322 1.138 2.005l.401-.172c1.736-.713 2.788-.808 3.801-.899.779-.07 1.583-.141 3.075-.593.655-.197 1.195-.395 1.65-.56 1.377-.5 3.1-1.041 4.709.091 1.678 1.27 1.604 3.327 1.556 4.689a24.865 24.865 0 0 1-.666 5.014c-.086.376-.18.8-.183.95-.004 1.205 5.066 3.548 6.97 4.44 4.283 1.993 7.99 3.717 7.7 7.08-.205 2.408-2.505 4.201-7.027 5.47-1.408.394-2.714.532-3.822.582.358.777.52 1.703.144 2.725-.896 2.418-4.085 3.27-9.483 2.544-1.343-.177-3.147-.422-5.25-1.385-.99-.455-1.812-.964-2.508-1.41-.285.384-.67.748-1.212 1.023-1.591.812-3.48.424-5.59-1.239-2.346-1.793-4.032-3.63-5.52-5.247-1.302-1.41-2.426-2.622-3.517-3.267-2.043-1.17-4.596-.642-7.724.169l-7.87 2.115ZM648.39 187.738l-10.101-2.392-.558-.761c-2.58-3.52-5.485-5.884-8.637-7.03-.5-.181-1.01-.338-1.53-.497-2.06-.632-4.62-1.418-7.085-3.783-1.373-1.322-4.421-4.748-2.838-7.69.417-.794 1.029-1.29 1.651-1.609-.087-.11-.174-.224-.268-.345-1.13-1.497-1.489-2.49-1.834-3.448-.265-.736-.538-1.495-1.353-2.824-.357-.583-.686-1.055-.961-1.453-.833-1.206-1.793-2.735-1.106-4.58.803-1.944 2.811-2.394 4.14-2.693a24.868 24.868 0 0 1 5.02-.628c.385-.013.82-.029.965-.064 1.166-.302 2.147-5.8 2.528-7.868.84-4.65 1.568-8.672 4.895-9.245 2.38-.411 4.699 1.359 7.073 5.41.738 1.263 1.203 2.49 1.533 3.55.66-.543 1.515-.936 2.6-.83 2.565.252 4.199 3.121 4.865 8.527.17 1.344.39 3.15-.008 5.429-.189 1.073-.473 1.998-.728 2.785.444.177.894.458 1.297.912 1.19 1.333 1.293 3.26.22 5.722-1.14 2.724-2.49 4.82-3.676 6.67-1.034 1.617-1.92 3.011-2.267 4.231-.613 2.273.544 4.608 2.122 7.428l4.042 7.076ZM661.142 159.633l4.876-9.165.878-.347c4.06-1.603 7.083-3.813 8.99-6.571.303-.438.583-.892.87-1.354 1.133-1.832 2.542-4.11 5.455-5.894 1.628-.992 5.715-3.072 8.158-.795.663.606.987 1.323 1.138 2.006.13-.057.26-.112.402-.172 1.735-.714 2.787-.808 3.8-.9.78-.07 1.583-.14 3.075-.592.655-.198 1.195-.395 1.65-.561 1.377-.5 3.1-1.04 4.71.092 1.677 1.27 1.603 3.327 1.555 4.688a24.865 24.865 0 0 1-.666 5.015c-.085.376-.18.8-.182.95-.004 1.204 5.066 3.547 6.969 4.44 4.284 1.993 7.99 3.716 7.7 7.08-.205 2.407-2.505 4.2-7.027 5.47-1.408.394-2.713.532-3.822.582.358.776.52 1.703.144 2.725-.895 2.418-4.084 3.27-9.483 2.544-1.343-.177-3.146-.422-5.249-1.386-.99-.454-1.812-.963-2.509-1.41-.284.385-.67.749-1.211 1.024-1.592.812-3.481.423-5.591-1.239-2.346-1.794-4.031-3.63-5.52-5.248-1.301-1.41-2.425-2.62-3.517-3.266-2.043-1.17-4.596-.642-7.723.169l-7.87 2.115Z" />
      <path d="m556.692 330.817-1.019-2.34.98-2.354-.98 2.354-2.242-1.186c.099-.215.29-.737.595-1.548 1.676-4.443 6.77-17.969 16.896-37.83 7.068-13.864 15.098-27.595 23.87-40.817 8.787-13.243 16.206-22.744 22.167-30.38 4.497-5.76 8.877-11.177 13.148-16.451 11.404-14.095 22.175-27.41 32.018-43.576 2.2-3.607 6.774-11.12 7.821-21.729.607-6.153-.056-12.44-1.976-18.682l4.88-1.5c2.115 6.895 2.845 13.855 2.172 20.688-1.161 11.763-6.146 19.948-8.54 23.881-10.018 16.451-20.894 29.893-32.41 44.123-4.252 5.257-8.615 10.65-13.093 16.385-5.906 7.566-13.26 16.984-21.933 30.057-8.669 13.064-16.6 26.627-23.581 40.315-9.997 19.612-15.014 32.937-16.663 37.314-.881 2.337-1.066 2.826-2.11 3.276Z" />
      <path d="M655.672 117.678a9.097 9.097 0 0 1-.513-.375c-3.451-2.648-5.3-7.066-5.5-13.132-.089-2.85.684-5.503 2.224-10.793.237-.817 1.482-4.927 4.016-10.02 1.655-3.329 2.578-4.562 3.949-5.272 1.523-.792 3.201-.923 4.82-.677.223-.44.55-.825 1.015-1.129 1.919-1.264 3.668.273 4.624 1.09.477.423 1.069.956 1.797 1.4 1.142.704 1.961.782 3.2.905 1.184.117 2.657.263 4.468 1.026 3.58 1.492 5.596 4.177 6.26 5.061 3.514 4.634 3.334 9.71 3.125 15.586-.045 1.177-.317 5.386-1.952 10.292-1.18 3.539-2.2 4.772-3.125 5.576-1.895 1.655-3.905 1.969-8.75 2.382-5.064.438-7.604.655-9.556.507-4.539-.35-7.39-.569-10.102-2.427Z" />
    </g>
    <path
      d="M635.562 0h-285.96c-10.49 0-19.02 8.53-19.02 19.02v294.96c0 10.49 8.53 19.02 19.02 19.02h285.96c10.49 0 19.02-8.53 19.02-19.02V19.02c0-10.49-8.53-19.02-19.02-19.02Zm17.02 313.98c0 9.4-7.62 17.02-17.02 17.02h-285.96c-9.4 0-17.02-7.62-17.02-17.02V19.02c0-9.4 7.62-17.02 17.02-17.02h151.472c83.676 0 151.508 67.832 151.508 151.508V313.98Z"
      fill="#3f3d56"
    />
    <path
      d="M324.53 221.685c-10.023 2.709-16.75 10.076-15.024 16.455 1.725 6.378 11.247 9.35 21.273 6.64a25.983 25.983 0 0 0 10.835-5.763l42.321-12.015-6.061-19.74-41.078 13.94a25.985 25.985 0 0 0-12.266.483Z"
      fill="#ffb6b6"
    />
    <path
      d="M501.882 162.462s11.95 17.528-14.98 30.75c-26.929 13.223-76.707 32.094-76.707 32.094l-68.73 15.923-10.38-22.754 81.556-22.22 66.457-37.088 22.784 3.295Z"
      fill="#3f3d56"
    />
    <path
      d="M493.888 115.807c-.306 8.309 5.675 18.172 12 18.374 7.607.244 43.573 2.806 44.73-.177 8.027-20.712-29.78-63.674-38.3-64.914-4.58-.666-10.064 5.91-12.173 11.337-2.954 7.607 1.406 11.194-1.055 21.442-1.876 7.814-4.989 8.13-5.202 13.938Z"
      fill="#2f2e41"
    />
    <path
      fill="#ffb6b6"
      d="m431.284 443.34-25.243 5.785 25.364 75.26 17.105-3.919-17.226-77.126z"
    />
    <path
      d="m422.264 500.915 9.763 1.432 1.505 5.23s.325-6.653 11.108-11.212l2.803 4.681s5.772 3.714 7.637 12.92l4.142 24.901-8.476 2.249-6.22-16.36s-3.423-3.128-8.867 18.036c0 0-2.205 7.113-22.204 6.29-2.749-.114-5.167-1.948-5.9-4.6-.406-1.463-.227-2.976 1.461-3.99 4.297-2.58 9.294-2.338 11.222-6.924 1.928-4.586 2.026-32.653 2.026-32.653Z"
      fill="#2f2e41"
    />
    <path
      fill="#ffb6b6"
      d="m486.123 477.557-22.54-.557 3.155 79.25 17.545.312 1.84-79.005z"
    />
    <path
      d="m463.513 531.269 9.131 3.74.203 5.437s1.916-6.378 13.48-8.208l1.593 5.218s4.709 4.994 4.304 14.378L490.252 577l-8.769.143-2.1-17.375s-2.57-3.86-12.946 15.371c0 0-3.852 6.373-23.065.76-2.64-.77-4.547-3.133-4.621-5.883-.04-1.517.497-2.943 2.38-3.52 4.79-1.47 9.583-.034 12.558-4.021 2.974-3.988 9.824-31.206 9.824-31.206ZM532.637 390.997l-119.214-9.225 33.548-137.531 80.266-11.565 5.4 158.32z"
      fill="#2f2e41"
    />
    <path
      fill="#5964de"
      d="m516.196 138.193 25.118-13.382 20.283 23.95L520.838 279.4l-74.559-33.014 56.63-96.815 13.287-11.378z"
    />
    <path
      d="M519.38 255.812s7.998 41.244-16.77 62.68l-7.582 24.105-8.187 44.491.741 114.912-30-3-12-109.996-.143-54.745-44.289 37.928 46.352 91.038-37.77 16.539-46.128-109.71a19.527 19.527 0 0 1 2.207-20.45l80.468-103.218 73.1 9.426Z"
      fill="#2f2e41"
    />
    <path
      d="m550.477 135.63-49.248 45.946c-11.655 94.58-5.293 181.427 28.243 256.611l82.757-38.356c-68.24-20.697-61.548-134.344-48.307-256.113l-13.445-8.087ZM508.006 149.722 515.582 138l-41.902 24.635-33.134 91.821 61.122-76.276 6.338-28.458z"
      fill="#3f3d56"
    />
    <path
      d="M612.822 322.436c2.888 9.973 10.374 16.566 16.72 14.727 6.347-1.839 9.149-11.413 6.258-21.388-1.1-4.001-3.142-7.68-5.955-10.73l-12.77-42.1-19.629 6.414 14.674 40.822a25.985 25.985 0 0 0 .702 12.255Z"
      fill="#ffb6b6"
    />
    <path
      d="M548.564 144.699s17.178-12.448 31.169 14.09c13.99 26.538 34.285 75.753 34.285 75.753l17.892 68.245-22.448 11.028-24.554-80.883-38.982-65.363 2.638-22.87Z"
      fill="#3f3d56"
    />
    <circle cx={528.139} cy={95.838} r={27.896} fill="#ffb6b6" />
    <path
      d="M528.23 84.955c-1.57-.155-2.376 1.506-8.373 3.822-2.125.82-3.212 1.233-4.46 1.313-3.793.244-6.742-1.851-8.712-3.252-3.202-2.276-5.265-3.742-5.668-6.085-.526-3.059 2.936-6.476 9.883-13.184 3.402-3.286 5.475-5.27 8.803-7.632 5.584-3.962 8.375-5.943 12.289-6.331 5.183-.515 9.123 1.958 14.81 5.527 1.535.964 3.75 1.428 6.098 1.605 7.686.578 14.275 5.701 16.366 13.12.16.567.294 1.08.394 1.52 4.126 18.013 2.975 36.75-2.672 54.346-.152.473-.279.915-.377 1.316-2.623 10.717-38.656 14.894-42.87 5.835-2.655-5.705 9.748-11.413 11.6-28.423 1.29-11.842-3.193-23.11-7.11-23.497Z"
      fill="#2f2e41"
    />
    <path fill="#e6e6e6" d="M117.33 91.253h302.252v1.549H117.33z" />
    <g fill="#e6e6e6">
      <path d="M376.912 68.6H160c-3.417 0-6.197-2.78-6.197-6.197s2.78-6.198 6.197-6.198h216.912c3.417 0 6.197 2.78 6.197 6.198s-2.78 6.197-6.197 6.197Z" />
      <circle cx={118} cy={90.583} r={13} />
      <circle cx={158} cy={62.583} r={13} />
    </g>
    <path fill="#3f3d56" d="M15.33 236.253h302.252v1.549H15.33z" />
    <g fill="#5964de">
      <path d="M274.912 213.6H58c-3.417 0-6.197-2.78-6.197-6.197s2.78-6.198 6.197-6.198h216.912c3.417 0 6.197 2.78 6.197 6.198s-2.78 6.197-6.197 6.197Z" />
      <circle cx={13} cy={235.583} r={13} />
      <circle cx={53} cy={207.583} r={13} />
    </g>
    <path fill="#e6e6e6" d="M51.33 396.253h302.252v1.549H51.33z" />
    <g fill="#e6e6e6">
      <path d="M310.912 373.6H94c-3.417 0-6.197-2.78-6.197-6.197s2.78-6.198 6.197-6.198h216.912c3.417 0 6.197 2.78 6.197 6.198s-2.78 6.197-6.197 6.197Z" />
      <circle cx={88} cy={366.583} r={13} />
      <circle cx={49} cy={396.583} r={13} />
    </g>
  </svg>
)

export default SvgComponent
