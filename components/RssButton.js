export default function RssButton() {
  return (
    <div className="absolute right-2 top-2">
      <a
        href="https://andrewmillen.com/feed.xml"
        target="_blank"
        className="inline-block p-1 bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg"
        title="Subscribe via RSS"
      >
        <span className="sr-only">Subscribe via RSS</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#EE802F]" // The official RSS orange color, I think
        >
          <path
            d="M6.18 15.64C6.75817 15.64 7.31266 15.8697 7.72149 16.2785C8.13032 16.6873 8.36 17.2418 8.36 17.82C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82C4 17.2418 4.22968 16.6873 4.63851 16.2785C5.04734 15.8697 5.60183 15.64 6.18 15.64ZM4 4.44C8.12677 4.44 12.0845 6.07935 15.0026 8.99742C17.9206 11.9155 19.56 15.8732 19.56 20H16.73C16.73 16.6238 15.3888 13.3859 13.0015 10.9985C10.6141 8.61119 7.37621 7.27 4 7.27V4.44ZM4 10.1C6.62564 10.1 9.14375 11.143 11.0004 12.9996C12.857 14.8563 13.9 17.3744 13.9 20H11.07C11.07 18.1249 10.3251 16.3266 8.99924 15.0008C7.67336 13.6749 5.87508 12.93 4 12.93V10.1Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </div>
  );
}
