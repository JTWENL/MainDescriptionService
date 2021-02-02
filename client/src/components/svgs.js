import styles from '../style/style.module';

let svgs = {
  heart: (
    <svg className={styles['availability-svg']} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.336 5.52055C14.2336 3.62376 17.3096 3.62401 19.2069 5.52129C20.2067 6.52115 20.6796 7.85005 20.6259 9.15761C20.6151 12.2138 18.4184 14.8654 16.4892 16.6366C15.4926 17.5517 14.5004 18.2923 13.7593 18.8036C13.3879 19.0598 13.0771 19.2601 12.8574 19.3973C12.7475 19.466 12.6601 19.519 12.5992 19.5555C12.5687 19.5737 12.5448 19.5879 12.5279 19.5978L12.5079 19.6094L12.502 19.6129L12.5001 19.614C12.5001 19.614 12.4989 19.6147 11.9999 18.748C11.501 19.6147 11.5005 19.6144 11.5005 19.6144L11.4979 19.6129L11.4919 19.6094L11.472 19.5978C11.4551 19.5879 11.4312 19.5737 11.4007 19.5555C11.3397 19.519 11.2524 19.466 11.1425 19.3973C10.9227 19.2601 10.612 19.0598 10.2405 18.8036C9.49947 18.2923 8.50726 17.5517 7.51063 16.6366C5.58146 14.8654 3.38477 12.2139 3.37399 9.15765C3.32024 7.85008 3.79314 6.52117 4.79301 5.52129C6.69054 3.62376 9.76704 3.62376 11.6646 5.52129L11.9993 5.856L12.3353 5.52129L12.336 5.52055ZM11.9999 18.748L11.5005 19.6144L11.9999 19.9019L12.4989 19.6147L11.9999 18.748ZM11.9999 17.573C12.1727 17.462 12.384 17.3226 12.6236 17.1573C13.3125 16.6821 14.2267 15.9988 15.1366 15.1634C17.0157 13.4381 18.6259 11.2919 18.6259 9.13506V9.11213L18.627 9.08922C18.6626 8.31221 18.3844 7.52727 17.7926 6.9355C16.6762 5.81903 14.866 5.81902 13.7495 6.9355L13.7481 6.93689L11.9965 8.68166L10.2504 6.9355C9.13387 5.81903 7.3237 5.81903 6.20722 6.9355C5.61546 7.52727 5.33724 8.31221 5.3729 9.08922L5.37395 9.11213V9.13507C5.37395 11.2919 6.98418 13.4381 8.86325 15.1634C9.77312 15.9988 10.6874 16.6821 11.3762 17.1573C11.6159 17.3226 11.8271 17.462 11.9999 17.573Z"></path>
    </svg>
  ),
  truck: (
    <svg className={styles['availability-svg']} viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M1 4H16V7.00001L19.0246 7L23.0039 12.6848V18H20.3472C19.9254 19.3056 18.6999 20.25 17.2539 20.25C15.8079 20.25 14.5824 19.3056 14.1607 18H10.2563C9.83456 19.3056 8.60911 20.25 7.16309 20.25C5.71707 20.25 4.49161 19.3056 4.06984 18H1V4ZM4.06984 16C4.49161 14.6944 5.71707 13.75 7.16309 13.75C8.60911 13.75 9.83456 14.6944 10.2563 16H14V6H3V16H4.06984ZM16 14.0007C16.3858 13.8392 16.8095 13.75 17.2539 13.75C18.6999 13.75 19.9254 14.6944 20.3472 16H21.0039V13.3152L17.9833 9L16 9.00001V14.0007ZM7.16309 15.75C6.47273 15.75 5.91309 16.3096 5.91309 17C5.91309 17.6904 6.47273 18.25 7.16309 18.25C7.85344 18.25 8.41309 17.6904 8.41309 17C8.41309 16.3096 7.85344 15.75 7.16309 15.75ZM17.2539 15.75C16.5635 15.75 16.0039 16.3096 16.0039 17C16.0039 17.6904 16.5635 18.25 17.2539 18.25C17.9443 18.25 18.5039 17.6904 18.5039 17C18.5039 16.3096 17.9443 15.75 17.2539 15.75Z"></path>
    </svg>
  ),
  store: (
    <svg className={styles['availability-svg']} viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M22 20V4H2v16h20zM20 6H4v12h3v-8h10v8h3V6zm-9 6H9v6h2v-6zm2 6h2v-6h-2v6z"></path>
    </svg>
  ),
  drill: (
    <svg className={styles['availability-svg']} viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M4 4H16V5L18 5V6H22V8H18V9H16V11H12.1439L10.7803 14H13V20H4V14H5.58336L6.947 11H4V4ZM6 6H14V9H6V6ZM8.58336 14L9.947 11H9.14391L7.78028 14H8.58336ZM6 16H11V18H6V16Z"></path>
    </svg>
  ),
  star: (
    <svg className={styles['star-svg']} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.002 4l2.86 4.91 5.552 1.201-3.785 4.237.572 5.652-5.199-2.29L6.804 20l.572-5.652-3.785-4.237L9.143 8.91 12.003 4z"></path>
    </svg>
  ),
  exit: (
    <svg className={styles['svg-exit']} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 13.415l4.95 4.95 1.414-1.415-4.95-4.95 4.95-4.95-1.415-1.413-4.95 4.95-4.949-4.95L5.636 7.05l4.95 4.95-4.95 4.95 1.414 1.414 4.95-4.95z"></path>
    </svg>
  ),
  left: (
    <svg className={styles['svg-exit']} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M7 12l8.001-8 1.414 1.414-6.587 6.587 6.586 6.587L15 20.002l-8-8.001z"></path>
    </svg>
  ),
  right: (
    <svg className={styles['svg-exit']} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M16.415 12.001l-8.001 8L7 18.588l6.587-6.586L7 5.414 8.415 4l8 8.001z"></path>
    </svg>
  )
};

export default svgs;