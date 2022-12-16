import React from 'react'

const Home = (props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      >
        <path d="M8.5 23.2H1.3V9L12 .8 22.7 9v14.2h-7.2v-5c0-1.9-1.6-3.4-3.5-3.4s-3.5 1.5-3.5 3.4v5z"></path>
      </g>
    </svg>
  )
}

const Trailer = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeMiterlimit="10"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <path d="M3.2 12.8h19.6v9.5c0 .5-.4.9-1 .9H4.1c-.5 0-1-.4-1-.9v-9.5"></path>
        <path d="M3.3 13.1l-2-4.4c-.2-.5 0-1 .5-1.2L18 .8c.5-.2 1.1 0 1.3.5l1.8 4-17.5 7.3"></path>
        <path d="M15 2.1l-.9 6M8 4.7l-1.2 6.6"></path>
      </g>
    </svg>
  )
}

const Series = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeMiterlimit="10"
      >
        <path d="M21.4 23H2.6c-.9 0-1.6-.7-1.6-1.6V8.9c0-.9.7-1.6 1.6-1.6h18.9c.8 0 1.5.7 1.5 1.6v12.6c0 .8-.7 1.5-1.6 1.5zM6.4 1L12 7M17.6 1L12 7"></path>
      </g>
    </svg>
  )
}

const Search = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 25 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeMiterlimit="10"
      >
        <path d="M16.4 16.7l6.3 6.5"></path>
        <ellipse cx="10.5" cy="9.8" rx="9.2" ry="9.1"></ellipse>
      </g>
    </svg>
  )
}

const ImgPlaceholder = (props) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#999"
      {...props}
    >
      <path d="M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-1 16h-19l4-7.492 3 3.048 5.013-7.556 6.987 12zm-11.848-2.865l-2.91-2.956-2.574 4.821h15.593l-5.303-9.108-4.806 7.243zm-4.652-11.135c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm0 1c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"></path>
    </svg>
  )
}

const Logo = (props) => {
  return (
    <svg width="50" height="50" viewBox="0 0 122 122" fill="" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="4.2">
        <path d="M1.48,78.38l76.9-76.9l0,0C79.36,0.49,80.65,0,81.95,0c1.29,0,2.59,0.49,3.57,1.48l0,0l10.17,10.17 c0.55,0.55,0.61,1.4,0.17,2.01c-1.12,1.87-1.55,4.05-1.3,6.16c0.25,2.09,1.18,4.12,2.78,5.72c1.61,1.61,3.63,2.54,5.72,2.78 c2.14,0.26,4.35-0.2,6.24-1.36c0.63-0.38,1.42-0.27,1.92,0.23l0,0l10.17,10.17l0,0c0.98,0.98,1.48,2.28,1.48,3.57 c0,1.29-0.49,2.59-1.48,3.57l0,0l-76.9,76.9l0,0c-0.98,0.98-2.28,1.48-3.57,1.48c-1.29,0-2.59-0.49-3.57-1.48l0,0L27.25,111.3 c-0.56-0.56-0.61-1.44-0.15-2.05c1.22-1.89,1.73-4.12,1.51-6.28c-0.22-2.15-1.15-4.24-2.81-5.89c-1.65-1.65-3.74-2.59-5.89-2.81 c-2.2-0.22-4.45,0.3-6.36,1.56c-0.63,0.42-1.46,0.32-1.97-0.2l0,0L1.48,85.52l0,0C0.49,84.53,0,83.24,0,81.95 C0,80.65,0.49,79.36,1.48,78.38L1.48,78.38L1.48,78.38z M80.6,3.7L3.7,80.6l0,0c-0.37,0.37-0.55,0.86-0.55,1.35 c0,0.49,0.18,0.98,0.55,1.35l0,0l9.25,9.25c2.26-1.18,4.8-1.65,7.28-1.4c2.85,0.29,5.63,1.52,7.8,3.7c2.18,2.18,3.41,4.95,3.7,7.8 c0.25,2.48-0.21,5.02-1.4,7.28l9.25,9.25l0,0c0.37,0.37,0.86,0.55,1.35,0.55c0.49,0,0.98-0.18,1.35-0.55l0,0l76.9-76.9l0,0 c0.37-0.37,0.55-0.86,0.55-1.35c0-0.49-0.18-0.98-0.55-1.35l0,0l-9.34-9.34c-2.24,1.09-4.73,1.49-7.15,1.2 c-2.77-0.33-5.45-1.56-7.58-3.68c-2.12-2.12-3.35-4.81-3.68-7.58c-0.29-2.42,0.11-4.91,1.2-7.15L83.3,3.7l0,0 c-0.37-0.37-0.86-0.55-1.35-0.55C81.46,3.14,80.97,3.33,80.6,3.7L80.6,3.7L80.6,3.7z M25.26,73.45l38.37-38.37l0,0 c1.09-1.09,2.54-1.64,3.98-1.64c1.45,0,2.89,0.55,3.98,1.64l0,0l17.64,17.64c1.1,1.1,1.64,2.54,1.64,3.98 c0,1.44-0.55,2.89-1.64,3.98L50.86,99.05c-1.1,1.1-2.54,1.64-3.98,1.64c-1.44,0-2.88-0.55-3.98-1.64L25.26,81.42l0,0 c-1.1-1.1-1.64-2.54-1.64-3.98S24.17,74.55,25.26,73.45L25.26,73.45L25.26,73.45z M65.86,37.3L27.48,75.67l0,0 c-0.48,0.48-0.72,1.12-0.72,1.76c0,0.64,0.24,1.28,0.72,1.76l0,0l17.64,17.64c0.48,0.48,1.12,0.72,1.76,0.72 c0.64,0,1.28-0.24,1.76-0.72l38.37-38.37c0.48-0.48,0.72-1.12,0.72-1.76c0-0.64-0.24-1.28-0.72-1.76L69.38,37.3l0,0 c-0.49-0.49-1.12-0.73-1.76-0.73C66.98,36.57,66.34,36.82,65.86,37.3L65.86,37.3L65.86,37.3z" />
      </g>
    </svg>
  )
}

export { Home, Trailer, Series, Search, ImgPlaceholder, Logo }
