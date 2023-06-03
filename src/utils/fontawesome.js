import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAccessibleIcon,
  faInstagram,
  faGithub,
  faLinkedin,
  faTwitch,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faArrowUp,
  faChevronRight,
  faExclamationCircle,
  faRssSquare,
} from "@fortawesome/free-solid-svg-icons";

const fontLibrary = library;

fontLibrary.add(
  faAccessibleIcon,
  faArrowRight,
  faArrowUp,
  faChevronRight,
  faExclamationCircle,
  faInstagram,
  faGithub,
  faLinkedin,
  faRssSquare,
  faTwitch,
  faTwitter
);

export default fontLibrary;
