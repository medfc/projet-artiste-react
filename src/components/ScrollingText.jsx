  import { SCROLLING_BANNER_TEXT } from "../constants/texts";

  export default function ScrollingText() {
    return (
      <div className="scrolling-text-container">
        <p id="scrolling-text">{SCROLLING_BANNER_TEXT}</p>
      </div>
    );
  }

