import marionetteModel from "../assets/model/marionette_filler_model.jpg";
import upperFaceBotox from "../assets/model/upper_face_botox_model.jpg";
import lowerFaceBottox from "../assets/model/lower_face_botox.jpg";
import neckBottox from "../assets/model/neck_botox_model.jpg";
import armpitBotox from "../assets/model/armpit_botox_model.jpg";
import lipFiller from "../assets/model/lip_filler_model.jpg";
import nasolabialFIller from "../assets/model/nasolabial_filler.jpg";
import cheekFiller from "../assets/model/cheek_filler_model.jpg";
import jawlineFiller from "../assets/model/jawline_filler_model.jpg";
import tearTroughFiller from "../assets/model/tear_trough_filler.jpg";
import templeFiller from "../assets/model/temple_filler_model.jpg";
import facialHarmonisation from "../assets/model/facial_harmonisation.jpg";

const modelCards = [
  {
    image: upperFaceBotox,
    title: "Botox(R) for the Upper Face",
    price: "£100",
    whatIsIt: "Treatment with Botox(R) for the forehead, brow and crow's feet.",
    whatDoesItInvolve:
      "Injections with fine needles, with Botox(R) acting to relax the muscles of the upper face and reduce the appearance of lines",
    isThereDowntime:
      "The procedure itself takes around 30 minutes in total. After the procedure there are some instructions to follow, but there is no downtime."
  },
  {
    image: lowerFaceBottox,
    title: "Botox(R) for the Lower Face",
    price: "£100",
    whatIsIt:
      "Treatment with Botox(R) for the one of the following areas: gummy smile, jaw muscles for teeth grinding or for facial slimming, chin/mouth depressors for cobblestone chin or down-turned mouth cornerst.",
    whatDoesItInvolve:
      "Injections with fine needles, with Botox(R) acting to relax the muscles being targeted.",
    isThereDowntime:
      "The procedure itself takes around 30 minutes in total. After the procedure there are some instructions to follow, but there is no downtime."
  },
  {
    image: neckBottox,
    title: "Botox(R) for the Neck",
    price: "£150",
    whatIsIt:
      "Treatment with Botox(R) for the neck muscle bands (platysmal bands).",
    whatDoesItInvolve:
      "Injections with fine needles, with Botox(R) acting to relax the muscles of the superficial neck muscle (platysma). This results in a reduction in neck lines and a sharpening of the jawline.",
    isThereDowntime:
      "The procedure itself takes around 30 minutes in total. After the procedure there are some instructions to follow, but there is no downtime."
  },
  {
    image: armpitBotox,
    title: "Botox(R) for Underarm Sweating (Hyperhydrosis)",
    price: "£150",
    whatIsIt: "Treatment with Botox(R) for excessive sweating.",
    whatDoesItInvolve:
      "Injections with fine needles, with Botox(R) acting to reduce underarm sweating.",
    isThereDowntime:
      "The procedure itself takes around 45 minutes in total. After the procedure there are some instructions to follow, but there is no downtime."
  },
  {
    image: lipFiller,
    title: "Dermal Filler for Lip Augmentation",
    price: "£100",
    whatIsIt:
      "Treatment with dermal filler (Juvederm(R) range) to augment the lips.",
    whatDoesItInvolve:
      "Application of anaesthetic cream followed by injections into the body/border/cupids bow of the lip to improve shape and increase volume.",
    isThereDowntime:
      "The procedure itself takes around 45 minutes in total. After the procedure there are some instructions to follow, and there may be some swelling, but there is no downtime."
  },
  {
    image: nasolabialFIller,
    title: "Dermal Filler for Nasolabial Lines",
    price: "£100",
    whatIsIt:
      "Treatment with dermal filler (Juvederm(R) range) to reduce the appearance of nasolabial folds.",
    whatDoesItInvolve:
      " Application of anaesthetic cream followed by injections into nasolabial folds of the face.",
    isThereDowntime:
      "The procedure itself takes around 45 minutes in total. After the procedure there are some instructions to follow, and there may be some swelling, but there is no downtime."
  },
  {
    image: marionetteModel,
    title: "Dermal Filler for Marionette Lines",
    price: "£100",
    whatIsIt:
      "Treatment with dermal filler (Juvederm(R) range) to reduce the appearance of Marionette Lines.",
    whatDoesItInvolve:
      "Application of anaesthetic cream followed by injections into Marionette areas in the lower face.",
    isThereDowntime:
      "The procedure itself takes around 45 minutes in total. After the procedure there are some instructions to follow, and there may be some swelling, but there is no downtime."
  },
  {
    image: cheekFiller,
    title: "Dermal Filler for Cheek Augmentation",
    price: "£100",
    whatIsIt:
      "Treatment with dermal filler (Juvederm(R) range) to augment and contour the cheek bones.",
    whatDoesItInvolve:
      "Application of anaesthetic cream followed by injections onto the cheek bone.",
    isThereDowntime:
      "The procedure itself takes around 45 minutes in total. After the procedure there are some instructions to follow, and there may be some swelling, but there is no downtime."
  },
  {
    image: jawlineFiller,
    title: "Dermal Filler for the Jawline",
    price: "£100",
    whatIsIt:
      "Treatment with dermal filler (Juvederm(R) range) to add volume to or define the jawline and/or chin.",
    whatDoesItInvolve:
      "Application of anaesthetic cream followed by injections into lower face/jaw/chin.",
    isThereDowntime:
      "The procedure itself takes around 45 minutes in total. After the procedure there are some instructions to follow, and there may be some swelling, but there is no downtime."
  },
  {
    image: tearTroughFiller,
    title: "Dermal Filler for Tear Trough (under eye hollowing)",
    price: "£100",
    whatIsIt:
      "Treatment with dermal filler (Juvederm(R) range) to reduce the appearance of under eye hollowing.",
    whatDoesItInvolve:
      " Application of anaesthetic cream followed by injections into the tear trough region.",
    isThereDowntime:
      "The procedure itself takes around 45 minutes in total. After the procedure there are some instructions to follow, and there may be some swelling, but there is no downtime."
  },
  {
    image: templeFiller,
    title: "Dermal Filler for Temple Hollowing",
    price: "£100",
    whatIsIt:
      "Treatment with dermal filler (Juvederm(R) range) to reduce the appearance of temporal hollowing.",
    whatDoesItInvolve:
      "Application of anaesthetic cream followed by injections into the temples.",
    isThereDowntime:
      "The procedure itself takes around 45 minutes in total. After the procedure there are some instructions to follow, and there may be some swelling, but there is no downtime."
  },
  {
    image: facialHarmonisation,
    title: "Facial Harmonisation/Non-surgical facelift",
    price: "£200",
    whatIsIt:
      "Treatment with dermal filler (Juvederm(R) range) and Botox(R) according to the bespoke needs of the patient.",
    whatDoesItInvolve:
      "Application of anaesthetic cream followed by injections into the relevant areas.",
    isThereDowntime:
      "The procedure itself takes around 45 minutes in total. After the procedure there are some instructions to follow, and there may be some swelling, but there is no downtime."
  }
];

export default modelCards;
