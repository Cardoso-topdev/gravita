export interface NavStatus {
  /** Nav tab title */
  title: string;
  /** Image source url for un-focused status tab icon */
  normalImgSrc: string;
  /** Image source url for focused status tab icon */
  focusImgSrc: string;
  /** Navigation path for nav tab */
  navPath: string;
  /** Focus status for nav tab */
  focus: boolean;
};