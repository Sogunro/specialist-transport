// ──────────────────────────────────────────────
// Shared constants — single source of truth
// ──────────────────────────────────────────────

/** Base path for all assets (empty for root domain deployment) */
export const BASE_PATH = "";

/** Contact information */
export const CONTACT = {
  phone: "0161 676 3832",
  phoneLink: "tel:01616763832",
  email: "admin@connectcarepatienttransport.com",
  address:
    "St. James\u2019s House, Suite 12, 6th Floor, Pendleton Way, Salford, M6 5FW",
  hours: "Open 24/7",
  emergency: "07440 787 932",
  emergencyLink: "tel:07440787932",
} as const;

/** Image paths — prefixed with basePath */
export const IMAGES = {
  logo: `${BASE_PATH}/images/logo.svg`,
  // Fleet vehicles
  vanPrivateHire: `${BASE_PATH}/images/van-private-hire.png`,
  vanSilverSide: `${BASE_PATH}/images/van-silver-side.jpg`,
  wavRampYellow: `${BASE_PATH}/images/wav-ramp-yellow.jpg`,
  wavRampAngle: `${BASE_PATH}/images/wav-ramp-angle.jpg`,
  wavInteriorAccess: `${BASE_PATH}/images/wav-interior-access.jpg`,
  // Safety section
  driverHelpingPassenger: `${BASE_PATH}/images/driver-helping-passenger.png`,
  driverWithId: `${BASE_PATH}/images/driver-with-id.png`,
  seatbeltHarness: `${BASE_PATH}/images/seatbelt-harness.png`,
  certificates: `${BASE_PATH}/images/certificates.png`,
  teamPhoto: `${BASE_PATH}/images/team-photo.png`,
  // Additional fleet
  fleetSideFull: `${BASE_PATH}/images/fleet-side-full.jpg`,
  fleetFrontView: `${BASE_PATH}/images/fleet-front-view.jpg`,
  safetyRampDeployed: `${BASE_PATH}/images/safety-ramp-deployed.jpg`,
  safetyInteriorRails: `${BASE_PATH}/images/safety-interior-rails.jpg`,
  safetyRearAccess: `${BASE_PATH}/images/safety-rear-access.jpg`,
  safetyChildSign: `${BASE_PATH}/images/safety-child-sign.jpg`,
  // Service cards
  serviceSend: `${BASE_PATH}/images/service-send.png`,
  serviceWav: `${BASE_PATH}/images/service-wav.png`,
  serviceCare: `${BASE_PATH}/images/service-care.png`,
  serviceHospital: `${BASE_PATH}/images/service-hospital.png`,
} as const;

/** Video paths */
export const VIDEOS = {
  fleet1: `${BASE_PATH}/videos/fleet-video-1.mp4`,
  fleet2: `${BASE_PATH}/videos/fleet-video-2.mp4`,
} as const;

/** Carousel auto-advance interval in milliseconds */
export const CAROUSEL_INTERVAL_MS = 5000;

/** Star rating count */
export const STAR_COUNT = 5;
