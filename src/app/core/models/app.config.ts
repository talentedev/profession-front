export interface IAppConfig {
  facebookLink: string;
  twitterLink: string;
  linkedInkLink: string;
  readonly calendly_url?: string;
  readonly recaptcha_key: string;
  readonly recaptcha_link: string;
  readonly google_analytics_id: string;
}

export const APP_CONFIG: IAppConfig = {
  facebookLink: 'https://www.facebook.com/sfindmyprofession',
  twitterLink: 'https://twitter.com/sfmpdaily',
  linkedInkLink: 'https://www.linkedin.com/company/sfind-my-profession/',
  calendly_url: 'https://calendly.com/star/',
  recaptcha_key: '6Lc9WyUUAAAAAPaadsfasdfasdfjJshndy7RuI',
  recaptcha_link: 'https://www.google.com/recaptcha/api.js',
  google_analytics_id: 'UA-7243432215-1'
};